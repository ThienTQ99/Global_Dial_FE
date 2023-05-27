import { Button, Image } from "antd";
import "./style.css";
import React from "react";

const User = ({ author, avatar, time }) => {
  return (
    <>
      <div className="user-users">
        <Image src={avatar} width="50px" className="user-avatar" />
        <div className="user-name">
          <p className="post-author">{author}</p>
          <p className="post-time">{time}</p>
        </div>
      </div>
    </>
  );
};

export default User;
