import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/callSetting/Lobby";
import RoomPage from "./screens/Room/Room";
import PrivateRoutes from "./utils/PrivateRoutes";
import LoginPage from "./screens/login/Login";
import NavBar from "./component/NavBar/NavBar";
import Homepage from "./screens/Homepage/Homepage";

function App() {



  return (
    <div className="App">

      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<LobbyScreen />} exact />
          <Route path="/room/:roomId" element={<RoomPage />} />
          <Route path="/home" element={<Homepage />} />
        </Route>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<LoginPage />} />
      </Routes>

    </div>
  );
}

export default App;
