import React from "react";
import NavBar from "../component/NavBar";
import Post from "../component/Post";
import "./style.css";
import { Divider, Image, Carousel, Button } from "antd";
import { englishCenters } from "../data/post";
import banner from "../assests/banner.png";
import User from "../component/User";

const Homepage = () => {
  return (
    <>
      <NavBar />
      <Divider />
      <Carousel className="banner-homepage" autoplay>
        <div>
          <Image
            className="banner-image"
            src="https://static.vecteezy.com/system/resources/previews/004/329/717/non_2x/language-learning-word-concept-banner-grammar-speaking-skills-foreign-language-online-school-self-education-isolated-lettering-typography-idea-with-linear-icons-presentation-illustration-vector.jpg"
            width="90%"
            height="250px"
          />
        </div>
        <div>
          <Image
            className="banner-image"
            src="https://static.vecteezy.com/system/resources/previews/004/329/717/non_2x/language-learning-word-concept-banner-grammar-speaking-skills-foreign-language-online-school-self-education-isolated-lettering-typography-idea-with-linear-icons-presentation-illustration-vector.jpg"
            width="90%"
            height="250px"
          />
        </div>
        <div>
          <Image
            className="banner-image"
            src="https://static.vecteezy.com/system/resources/previews/004/329/717/non_2x/language-learning-word-concept-banner-grammar-speaking-skills-foreign-language-online-school-self-education-isolated-lettering-typography-idea-with-linear-icons-presentation-illustration-vector.jpg"
            width="90%"
            height="250px"
          />
        </div>
        <div>
          <Image
            className="banner-image"
            src={banner}
            width="90%"
            height="250px"
          />
        </div>
      </Carousel>

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
            {englishCenters.map((item) => {
              return (
                <Post
                  author={item.author}
                  timePosted={item.timePosted}
                  avatar={item.avatar}
                  content={item.content}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
        <div className="body-homepage-right">
          <div className="user-title">Members</div>
          <div className="user-status">
            <Button className="user-status-item">Active</Button>
            <Button className="user-status-item">Newest</Button>
            <Button className="user-status-item">Popular</Button>
            <div className="user-status-item"></div>
          </div>
          {englishCenters.map((item) => {
            return (
              <User
                author={item.author}
                time={item.timePosted}
                avatar={item.avatar}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Homepage;
