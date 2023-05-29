import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import "./style.css";
import peer from "../../service/peer";
import { Button } from "antd";
import { useSocket } from "../../context/SocketProvider";
import { useNavigate } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa";
import { AiTwotoneVideoCamera, AiFillPhone } from "react-icons/ai";
import { BsFillCameraVideoOffFill } from "react-icons/bs";

const RoomPage = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const [isLocalStreamEnabled, setLocalStreamEnabled] = useState(true);
  const [isRemoteStreamEnabled, setRemoteStreamEnabled] = useState(true);

  const navigate = useNavigate();

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  const handleDisconnect = () => {
    socket.off();
    navigate("/");
  };

  const toggleLocalStream = async () => {
    if (myStream) {
      myStream.getVideoTracks().forEach((track) => {
        track.enabled = !isLocalStreamEnabled;

        setLocalStreamEnabled(!isLocalStreamEnabled);
      });
    }
  };

  const toggleRemoteStream = () => {
    if (remoteStream) {
      remoteStream.getVideoTracks().forEach((track) => {
        track.enabled = !isRemoteStreamEnabled;
      });
      setRemoteStreamEnabled(!isRemoteStreamEnabled);
    }
  };

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incoming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incoming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);

  return (
    <>
      <div>
        {!myStream && <div onClick={handleDisconnect}>Disconnect</div>}
        <h2 style={{ marginTop: "100px" }}>
          {remoteSocketId ? "Connected" : "No one in room"}
        </h2>
        {myStream && <Button onClick={sendStreams}>Send Stream</Button>}
        {remoteSocketId && !myStream && (
          <Button onClick={handleCallUser}>CALL</Button>
        )}
        <div className="video-stream">
          <div className="my-stream">
            {myStream && (
              <>
                <ReactPlayer
                  playing
                  height="500px"
                  width="700px"
                  url={myStream}
                />
              </>
            )}{" "}
          </div>
          <div className="remote-stream">
            {remoteStream && (
              <>
                <ReactPlayer
                  playing
                  height="500px"
                  width="700px"
                  url={remoteStream}
                />
              </>
            )}
          </div>
        </div>
      </div>
      {myStream && (
        <div className="calling-operation">
          <div className="operate-items">
            <FaMicrophone color="white" size="25px" />
          </div>
          <div className="operate-items" onClick={toggleLocalStream}>
            {isLocalStreamEnabled ? (
              <AiTwotoneVideoCamera color="white" size="25px" />
            ) : (
              <BsFillCameraVideoOffFill color="white" size="25px" />
            )}
          </div>
          <div
            className="operate-items"
            style={{
              background: "#ea4335",
            }}
            onClick={handleDisconnect}
          >
            <AiFillPhone color="white" size="25px" />
          </div>
        
        {/* <div className="operate-items" onClick={toggleLocalStream}>
          {isLocalStreamEnabled ? (
            <AiTwotoneVideoCamera color="white" size="25px" />
          ) : (
            <BsFillCameraVideoOffFill color="white" size="25px" />
          )}
        </div> */}
        <div
          className="operate-items"
          style={{
            background: "#ea4335",
          }}
          onClick={handleDisconnect}
        >
          <AiFillPhone color="white" size="25px" />
        </div>
      
      </div>
      )}
      </>
  )
};

export default RoomPage;
