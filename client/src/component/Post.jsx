import React from "react";
import "./style.css";
import { Image } from "antd";

const Post = ({ author, timePosted, avatar, content, image }) => {
  return (
    <>
      <div className="post-header">
        <Image src={avatar} width="50px" className="post-header-avatar" />
        <div className="post-header-name">
          <p className="post-author">{author}</p>
          <p className="post-time">{timePosted}</p>
        </div>
      </div>
      <div className="post-content">{content}</div>
      <div className="post-image">
        {image.map((item) => {
          return <Image className="post-image" width="300px" src={item} />;
        })}
      </div>
    </>
  );
};

export default Post;
