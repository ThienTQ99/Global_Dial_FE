import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../context/SocketProvider";
import "./style.css";
import LanguageSelector from "../../component/languageSelect/LanguageSelector";
import TopicSelector from "../../component/topicSelect/TopicSelector";
import CallButton from "../../component/callButton/CallButton";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, setTopic } from "./lobbySlice";
import { useGetLobbyDataQuery } from "../../service/lobbySevice";
import { languages, topics } from "../../data/CallSetting";

const LobbyScreen = () => {
  const count = useSelector((state) => state.lobby.value);
  const language = useSelector((state) => state.lobby.language);
  const topic = useSelector((state) => state.lobby.topic);
  const dispatch = useDispatch();

  const email = localStorage.getItem("email");

  // const [topic, setTopic] = useState("Anime");
  // const [language, setLanguage] = useState("English");
  const [isCall, setIsCall] = useState(false);

  console.log(language, "checkgud");
  const socket = useSocket();
  const navigate = useNavigate();

  const getData = useGetLobbyDataQuery();
  console.log(getData);

  useEffect(() => {
    console.log(socket);

    if (isCall) {
      socket.emit("room:join", { email, language, topic });
    }
  }, [isCall, socket]);

  const handleSubmitForm = useCallback(
    (e) => {
      socket.emit("room:join", { email, language, topic });
    },
    [email, topic, socket, socket]
  );

  const handlePlus = () => {};

  const handleJoinRoom = useCallback(
    (data) => {
      console.log(data);

      if (isCall) {
        const { email, room } = data;

        navigate(`/room/${room}`);
      }
    },
    [navigate, isCall]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  const handleSetLanguage = useCallback(
    (selectedLanguage) => {
      dispatch(setLanguage(languages.find((o) => o._id === selectedLanguage)));
    },
    [dispatch]
  );
  const handleSetTopic = useCallback(
    (selectedTopic) => {
      dispatch(setTopic(topics.find((o) => o._id === selectedTopic)));
    },
    [dispatch]
  );

  return (
    <div className="main">
      <LanguageSelector setLanguage={handleSetLanguage} isCall={isCall} />
      <div className="mt-2">
        <TopicSelector setTopic={handleSetTopic} isCall={isCall} />
      </div>
      <div className="mt-12">
        <CallButton setIsCall={setIsCall} />
      </div>
    </div>
  );
};

export default LobbyScreen;
