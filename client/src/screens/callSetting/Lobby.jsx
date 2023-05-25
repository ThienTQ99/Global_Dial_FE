import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../context/SocketProvider";
import UK from "../../image/UK";
import './style.css'
import LanguageSelector from "../../component/languageSelect/LanguageSelector";
import TopicSelector from "../../component/topicSelect/TopicSelector";
import CallButton from "../../component/callButton/CallButton";

const LobbyScreen = () => {

  const email = localStorage.getItem("email")
 

  const [topic, setTopic] = useState("Anime");
  const [languague, setLanguage] = useState("English");
  const [isCall,setIsCall] = useState(false)

  const socket = useSocket();
  const navigate = useNavigate();

  useEffect(()=>{
   isCall&&
   socket.emit("room:join", { email, languague , topic });
  },[isCall])

  // const handleSubmitForm = useCallback(
  //   (e) => {
      
  //     socket.emit("room:join", { email, language , topic });
      
     
  //   },
  //   [email, topic, socket]
  // );

  

  const handleJoinRoom = useCallback(
    (data) => {
     
      
      const { email, room } = data;
      if(isCall){
        navigate(`/room/${room}`);
      }
    },
    [navigate]
  );

  useEffect(() => {
    
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div className="main">
        <div className="selection">
          <LanguageSelector setLanguage={setLanguage} isCall={isCall}/>
          <TopicSelector setTopic={setTopic} isCall={isCall}/>
        </div>
        <div className="call">
          <CallButton setIsCall={setIsCall} />
        </div>
    </div>
  );
};

export default LobbyScreen;
