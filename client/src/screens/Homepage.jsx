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
            src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/346153430_961305271663257_5331120733481797337_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=KrPbieIYOYgAX-9vccF&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdQ6TUk-zu3KXcUWKitNfcCv8WQyLikC5oBKzURrI9yBhA&oe=6496655A"
            width="90%"
            height="250px"
          />
        </div>
        <div>
          <Image
            className="banner-image"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/english-google-classroom-banner-design-template-d5cf0a14ee89fe3c770af6980c0d7e50_screen.jpg?ts=1613049135"
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
