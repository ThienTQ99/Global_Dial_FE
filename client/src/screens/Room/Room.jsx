import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import "./style.css";
import peer from "../../service/peer";
import { Button } from "antd";
import { useSocket } from "../../context/SocketProvider";
import { useNavigate } from "react-router-dom";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { AiTwotoneVideoCamera, AiFillPhone } from "react-icons/ai";
import { BsFillCameraVideoOffFill } from "react-icons/bs";

const RoomPage = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const [isLocalStreamEnabled, setLocalStreamEnabled] = useState(true);
  const [isAudioStreamEnable, setAudioStreamEnable] = useState(true);
  

  const navigate = useNavigate();
  

  const init=async ()=>{
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    setMyStream(stream);
  }
  useEffect(()=>{
    init()
  },[])

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
    if (myStream) {
      const tracks = myStream.getTracks();
      tracks.forEach((track) => {
        const sender = peer.peer.getSenders().find((s) => s.track === track);
        if (!sender) {
          peer.peer.addTrack(track, myStream);
          
        }
      });
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
    sendStreams()
  }, []);

  const handleDisconnect = () => {
    socket.disconnect();
    navigate("/");
  };

  useEffect(() => {
    setTimeout(() => {
      sendStreams()
    }, 200);
  }, [remoteSocketId]);

  const toggleLocalStream = async () => {
    if (myStream) {
      myStream.getVideoTracks().forEach((track) => {
        track.enabled = !isLocalStreamEnabled;
        console.log(track);
      });

      setLocalStreamEnabled(!isLocalStreamEnabled);
    }
  };

  const toggleAudioStream = async () => {
    if (myStream) {
      myStream.getAudioTracks().forEach((track) => {
        track.enabled = !isAudioStreamEnable;
      });

      setAudioStreamEnable(!isAudioStreamEnable);
    }
  };

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      setRemoteStream(ev.streams[0]);
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
      <div className="body-room">
        <div className="">
          {myStream ? (
            <h2 style={{ paddingTop: "40px", fontSize: "30px" }}>
              {remoteSocketId ? "Connected" : "No one in room, please wait!"}
            </h2>
          ) : (
            <h2 style={{ paddingTop: "15%", fontSize: "30px" }}>
              {remoteSocketId ? "Connected" : "No one in room, please wait!"}
            </h2>
          )}

          {!myStream && (
            <Button
              type="primary"
              shape="round"
              onClick={handleDisconnect}
              size="large"
            >
              Disconnect
            </Button>
          )}

          {myStream && <Button onClick={sendStreams}>Send Stream</Button>}
          {remoteSocketId && (
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
                    muted
                  />
                </>
              )}{" "}
            </div>
            <div className="remote-stream">
              {remoteStream && (
                <>
                {console.log(remoteStream)}
                  <ReactPlayer
                    playing
                    height="500px"
                    width="700px"
                    url={remoteStream}
                    onPlay={() => {
                      console.log("no hope");
                    }}
                  />
                </>
              )}{" "}
            </div>
          </div>
        </div>
        {myStream && (
          <div className="calling-operation">
            <div className="operate-items" onClick={toggleAudioStream}>
              {isAudioStreamEnable ? (
                <FaMicrophone color="white" size="25px" />
              ) : (
                <FaMicrophoneSlash color="white" size="25px" />
              )}
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
          </div>
        )}
      </div>
    </>
  );
};

export default RoomPage;
