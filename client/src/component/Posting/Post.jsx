import React from "react";
import "./style.css";
import { Image } from "antd";

const Post = ({ author, timePosted, avatar, content, image, onClick }) => {
  return (
    <>
      <div className="post-header pt-3 pb-5" onClick={onClick}>
        <Image src={avatar} width="50px" className="post-header-avatar" />
        <div className="post-header-name pt-3">
          <p className="post-author">{author}</p>
          <p className="post-time pt-2">{timePosted}</p>
        </div>
      </div>
      <div className="post-content" onClick={onClick}>
        {content}
      </div>
      <div className="post-image pb-10">
        {image.length === 1 ? (
          <Image
            className="post-image"
            width="500px" // Adjust the desired width
            height="600px" // Adjust the desired height
            src={image[0]}
            style={{ alignItems: "center", marginLeft: "20%" }}
          />
        ) : (
          image.map((item) => (
            <Image
              className="post-image"
              width="350px"
              height="400px"
              src={item}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Post;
