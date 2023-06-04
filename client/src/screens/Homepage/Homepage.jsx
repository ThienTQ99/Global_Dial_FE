import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../../component/NavBar/NavBar";
import Post from "../../component/Posting/Post";
import "./style.css";
import "../../index.css";
import { Divider, Image, Carousel, Button } from "antd";
import { englishCenters } from "../../data/post";
import banner from "../../assests/banner.png";
import User from "../../component/User/User";

const Homepage = () => {
  const [activeButton, setActiveButton] = useState("Active");
  const navigate = useNavigate();

  const handleOnChangeStatus = (status) => {
    setActiveButton(status);
    console.log(status);
  };

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`, { state: { post: englishCenters[postId] } });
  };

  return (
    <>
      <NavBar />
      <Divider />
      <div className="carousel-container">
        {" "}
        <Carousel className="banner-homepage" autoplay>
          <div>
            <Image
              className="banner-image"
              src="https://static.vecteezy.com/system/resources/previews/004/329/717/non_2x/language-learning-word-concept-banner-grammar-speaking-skills-foreign-language-online-school-self-education-isolated-lettering-typography-idea-with-linear-icons-presentation-illustration-vector.jpg"
              width="100%"
              height="250px"
            />
          </div>
          <div>
            <Image
              className="banner-image"
              src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/349035550_754904563041994_3192087307416886769_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=B1IPOWa0FmMAX-4ajUQ&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdQtF5EgZkSLWuEMusB8RSP8-zAe2tn8vu_i6vywpyE2og&oe=64968843"
              width="100%"
              height="250px"
            />
          </div>
          <div>
            <Image
              className="banner-image"
              src="https://static.vecteezy.com/system/resources/previews/004/329/717/non_2x/language-learning-word-concept-banner-grammar-speaking-skills-foreign-language-online-school-self-education-isolated-lettering-typography-idea-with-linear-icons-presentation-illustration-vector.jpg"
              width="100%"
              height="250px"
            />
          </div>
          <div>
            <Image
              className="banner-image"
              src={banner}
              width="100%"
              height="250px"
            />
          </div>
        </Carousel>
      </div>

      <div className="body-homepage">
        <div className="body-homepage-left">
          <div className="filter-post">
            <div className="item-filter-post">All updates</div>
            <div className="item-filter-post">Mentions </div>
            <div className="item-filter-post">Favorite</div>
            <div className="item-filter-post">Friends</div>
            <div className="item-filter-post"></div>
            <div className="item-filter-post"></div>
            <div className="item-filter-post"></div>
          </div>
          <div className="post">
            {englishCenters.map((item, index) => {
              return (
                <Post
                  author={item.author}
                  timePosted={item.timePosted}
                  avatar={item.avatar}
                  content={item.content}
                  image={item.image}
                  key={index}
                  keyPost={index}
                  onClick={() => handlePostClick(index)}
                />
              );
            })}
          </div>
        </div>
        <div className="body-homepage-right">
          <div className="user-title">Members</div>
          <div className="user-status">
            {["Active", "Newest", "Popular"].map(
              (
                status,
                index // Map over the status array
              ) => (
                <Button
                  key={index}
                  className={`user-status-item ${
                    status === activeButton ? "active" : ""
                  }`}
                  onClick={() => handleOnChangeStatus(status)}
                  type={status === activeButton ? "primary" : "default"}
                >
                  {status}
                </Button>
              )
            )}
            <div className="user-status-item"></div>
          </div>
          {activeButton === "Active" &&
            englishCenters
              .filter((item) => item.isActive === true)
              .map((item, index) => {
                return (
                  <User
                    author={item.author}
                    time="Online"
                    avatar={item.avatar}
                    key={index}
                  />
                );
              })}
          {activeButton === "Popular" &&
            englishCenters
              .filter(
                (item) =>
                  item.author === "Inlingua International" ||
                  item.author === "Wall Street English" ||
                  item.author === "Kaplan International"
              )
              .map((item, index) => {
                return (
                  <User
                    author={item.author}
                    time={item.timePosted}
                    avatar={item.avatar}
                    key={index}
                  />
                );
              })}
          {activeButton === "Newest" &&
            englishCenters.map((item, index) => {
              return (
                <User
                  author={item.author}
                  time={item.timePosted}
                  avatar={item.avatar}
                  key={index}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Homepage;
