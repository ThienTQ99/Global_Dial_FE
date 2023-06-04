import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import { Button, Card, Checkbox, Divider, Image, Rate } from "antd";
import { BiEdit, BiTimeFive, BiMapAlt } from "react-icons/bi";
import { BsCoin, BsPerson } from "react-icons/bs";
import Meta from "antd/es/card/Meta";

const CourseDetail = () => {
  const location = useLocation();
  const post = location.state.post;
  console.log(post);

  return (
    <>
      <div className="flex flex-row">
        <div className="m-[5%] basis-3/5 rounded-lg">
          <Image src={post.image[0]} width={900} height={500} />
        </div>
        <div className="bg-white basis-1/5 mt-[5%] rounded-md h-fit">
          <div className="font-semibold text-base text-left pl-6 pt-6">
            {post.courseName}
          </div>
          <div className="font-semibold text-base text-left pl-6 pt-2">
            <Rate defaultValue={post.rating} /> (
            {Math.floor(Math.random() * 100) + 1} reviews )
          </div>
          <div className="w-[90%] ml-[5%]">
            <Divider />
          </div>
          <div className="flex flex-row">
            <div className="basis-1/5">
              <BiEdit size={25} className="ml-6 " />
            </div>
            <div className="basis-4/5 text-left">Course code: ICA70112</div>
          </div>
          <div className="w-[90%] ml-[5%]">
            <Divider />
          </div>
          <div className="flex flex-row">
            <div className="basis-1/5">
              <BsCoin size={25} className="ml-6 " />
            </div>
            <div className="basis-4/5 text-left">Price: {post.price}</div>
          </div>
          <div className="w-[90%] ml-[5%]">
            <Divider />
          </div>{" "}
          <div className="flex flex-row">
            <div className="basis-1/5">
              <BiTimeFive size={25} className="ml-6 " />
            </div>
            <div className="basis-4/5 text-left">
              Duration: {post.duration} weeks
            </div>
          </div>
          <div className="w-[90%] ml-[5%]">
            <Divider />
          </div>{" "}
          <div className="flex flex-row">
            <div className="basis-1/5">
              <BsPerson size={25} className="ml-6 " />
            </div>
            <div className="basis-4/5 text-left">
              {" "}
              Student: {Math.floor(Math.random() * 100) + 1}
            </div>
          </div>
          <div className="w-[90%] ml-[5%]">
            <Divider />
          </div>{" "}
          <div className="flex flex-row">
            <div className="basis-1/5">
              <BiMapAlt size={25} className="ml-6 " />
            </div>
            <div className="basis-4/5 text-left">Language: English</div>
          </div>
          <div className="w-[90%] ml-[5%] ">
            <Divider />
          </div>
          <Button type="primary" size="large" className="mt mb-4">
            Start Now
          </Button>
        </div>
      </div>
      <div className="">
        <div className="bg-white ml-[5%] mr-[8.5%] pt-4 rounded-lg  mb-4">
          <div>
            <h1 className=" pl-[5%] text-3xl font-semibold pb-4">
              Courses Description
            </h1>
            <div className="text-left pl-[5%] pr-[5%]">{post.courseDetail}</div>
          </div>
          <div class="bg-[#FFFAF2]">
            <h1 className=" pl-[5%] text-3xl font-semibold pb-4 mt-10 pt-4">
              Courses Review
            </h1>
            <div class="flex flex-row pt-2">
              <div class="basis-1/2 flex flex-row">
                <div class="basis-1/5 pl-[5%] pt-2">
                  <Image
                    width={50}
                    style={{ borderRadius: "50%" }}
                    src={post.feedback[0].image}
                  />
                </div>
                <div class="basis-4/5 text-left pb-5">
                  {post.feedback[0].comment}
                  <div className="pt-4 font-semibold">Jack</div>
                  <div className="font-thin text-slate-500">
                    {post.feedback[0].school}
                  </div>
                </div>
              </div>
              <div class="basis-1/2 flex flex-row">
                <div class="basis-1/5 pl-[5%] pt-2">
                  <Image
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%" }}
                    src={post.feedback[1].image}
                  />
                </div>
                <div class="basis-4/5 text-left mr-10 pb-5 ">
                  {post.feedback[1].comment}
                  <div className="pt-4 font-semibold">Karina</div>
                  <div className="font-thin text-slate-500">
                    {post.feedback[0].school}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className=" pl-[5%] text-3xl font-semibold pb-4  pt-4">
              Related Courses
            </h1>
            <div className="flex flex-row ml-[5%] pb-8">
              <div class="basis-1-4 mr-14">
                <Card
                  hoverable
                  style={{ width: 340 }}
                  cover={
                    <img
                      alt="example"
                      src="https://www.brainscape.com/academy/content/images/size/w1000/2020/07/Man-lying-in-bed-with-a-headache.jpg"
                    />
                  }
                >
                  <Meta
                    title="Everything You Need To Know
                    About Business"
                    description="https://reactheme.com/"
                  />
                </Card>
              </div>
              <div class="basis-1-4 mr-14">
                <Card
                  hoverable
                  style={{ width: 340 }}
                  cover={
                    <img
                      alt="example"
                      src="https://www.brainscape.com/academy/content/images/size/w1000/2020/07/Man-writing-notes-on-his-laptop.jpg"
                    />
                  }
                >
                  <Meta
                    title="Political Science"
                    description="https://premiumlayers.com/"
                  />
                </Card>
              </div>{" "}
              <div class="basis-1-4 ">
                <Card
                  hoverable
                  style={{ width: 340 }}
                  cover={
                    <img
                      alt="example"
                      src="https://www.brainscape.com/academy/content/images/size/w1000/2020/07/Girl-at-her-desk-studying.jpg"
                    />
                  }
                >
                  <Meta
                    title="Everything You Need To Know
                    About Business"
                    description="https://reactheme.com/"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default CourseDetail;
