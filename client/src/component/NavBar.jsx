import { Avatar, Button, Image } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../assests/logo.png";
import name from "../assests/globalDial.png";
import SearchComponent from "./Search";
import Search from "antd/es/input/Search";

const NavBar = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState();
  useEffect(() => {
    setAuth({
      displayName: localStorage.getItem("displayName"),
      photoURL: localStorage.getItem("photoURL"),
    });
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="bar">
      {/* <p className="name">Hello <b>{auth?.displayName}</b></p> */}
      <Image src={logo} className="logo" width="50px" />
      <Image src={name} className="logo-name" width="200px" />
      <p className="bar-part">Home</p>
      <p className="bar-part">Community</p>
      <p className="bar-part">Course</p>
      <div className="search-place">
        <SearchComponent />
      </div>
      <Avatar className="avatar" src={auth?.photoURL} />
      <Button className="logout" onClick={handleLogOut}>
        Log Out
      </Button>
    </div>
  );
};
export default NavBar;
