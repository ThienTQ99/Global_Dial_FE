import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../context/SocketProvider";

import './style.css'
import LanguageSelector from "../../component/languageSelect/LanguageSelector";
import TopicSelector from "../../component/topicSelect/TopicSelector";
import CallButton from "../../component/callButton/CallButton";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./lobbySlice";

const LobbyScreen = () => {

  const count = useSelector((state) => state.lobby.value)
  const dispatch = useDispatch()

  const email = localStorage.getItem("email")
 

  const [topic, setTopic] = useState("Anime");
  const [language, setLanguage] = useState("English");
  const [isCall,setIsCall] = useState(false)

  const socket = useSocket();
  const navigate = useNavigate();

  
  
  useEffect(()=>{
   console.log(socket);
    
    if(isCall){
      socket.emit("room:join", { email, language , topic });

    }
  },[isCall,socket])  

  const handleSubmitForm = useCallback(
    (e) => {
     
      socket.emit("room:join", { email, language , topic });
      
     
    },
    [email, topic, socket]
  );

  const handlePlus = () =>{
    dispatch(increment())
  }

  

  const handleJoinRoom = useCallback(
    (data) => {
      console.log(data);
      
     
      if(isCall){

        const { email, room } = data; 
       
          navigate(`/room/${room}`);
      }
      
    },
    [navigate,isCall]  
  );

  useEffect(() => {
    
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div className="main ">
        <div className="selection">
          <LanguageSelector setLanguage={setLanguage} isCall={isCall}/>
          <TopicSelector setTopic={setTopic} isCall={isCall}/>
        </div>
        <div className="call ">
          <CallButton setIsCall={setIsCall} />
          <div>{count}</div>
          <div onClick={handlePlus}>+</div>
        </div>
        
    </div>
  );
};

export default LobbyScreen;
