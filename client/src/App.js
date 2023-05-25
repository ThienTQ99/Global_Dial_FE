import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/callSetting/Lobby";
import RoomPage from "./screens/Room";
import PrivateRoutes from "./utils/PrivateRoutes";
import LoginPage from "./screens/login/Login";


function App() {

  
  
  return (
    <div className="App">
     
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<LobbyScreen />} exact/>
            <Route path="/room/:roomId" element={<RoomPage />} />
          </Route>
          <Route element={<LoginPage />} path="/login"/>
        </Routes> 
      
    </div>
  );
}

export default App;
