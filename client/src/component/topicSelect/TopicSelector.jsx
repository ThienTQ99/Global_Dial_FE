import { Divider, Row, Col, Badge, Modal, Button } from "antd";
import "./style.css";
import { topics } from "../../data/CallSetting";
import { useState } from "react";
import { Fragment } from "react";
import { CheckOutlined } from "@ant-design/icons";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TopicSelector = ({ setTopic, isCall }) => {
  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState(false)
  const plan = localStorage.getItem("plan");
  const [selected, setSelected] = useState({
    _id: "6472c4e3cacfcb8da2fc4adb",
    codeName: "psych",
    name: "Psychology",
    isPremium: false
  });

  const handleChoose = (prop) => {
    
    if(plan==='default'&&prop.isPremium){
      setIsOpenModal(true)
    }
    else if (!isCall) {
      setTopic(prop._id);
      setSelected(prop);
    }
  };
  const Tag = ({ prop }) => {
    
    return (
      <>
        {prop === selected ? (
          <div className="tagWrapT relative">
            <div className="tagT selectedT">
              <p className="langName">{prop.name}</p>
            </div>
          </div>
        ) : (
          <>
            {prop.isPremium ? (
              <div className="tagWrapT relative ">
                <div className="tagT premiumTag " onClick={() => handleChoose(prop)}>
                  <p className="langName">{prop.name}</p>
                </div>
                <img
                  src="img/premium.png"
                  className="w-[20px] absolute right-1 top-1"
                />
              </div>
            ) : (
              <div className="tagWrapT relative ">
                <div className="tagT " onClick={() => handleChoose(prop)}>
                  <p className="langName">{prop.name}</p>
                </div>
                
              </div>
            )}
          </>
        )}
      </>
    );
  };
  return (
    <div className="container">
      {/* <div className="top">
        <h1 style={{ marginRight: "15px" }}>Topic:</h1>

        <Tag prop={selected} />
      </div> */}
      {/* <Divider /> */}
      <div className="bottom">
        <Row style={{ padding: "0px 30px" }} justify="center">
          {topics.map((item) => {
            return (
              <Fragment key={item._id}>
                <Tag key={item._id} prop={item} />
              </Fragment>
            );
          })}
        </Row>
      </div>
      <Modal title='Premium Subscription' footer={null} open={isOpenModal} onCancel={()=>setIsOpenModal(false)}>
          <div className="flex flex-row align-middle "> <CheckOutlined className=" text-[#04e400] mr-3" /><p>Unlock all topic</p></div>
          <div className="flex flex-row align-middle "> <CheckOutlined className=" text-[#04e400] mr-3" /><p>Connect with tuitor</p></div>
          <div className="flex flex-row align-middle "> <CheckOutlined className=" text-[#7e7e7e] mr-3" /><p className=" text-[#7e7e7e]">Chat & friend list (comming soon)</p></div>
          <Button onClick={()=>navigate(`/Payment`)} className="w-full mt-5 font-semibold bg-[#ffb229]">Go Premium from &nbsp;<span className="line-through"> 500k </span>&nbsp; 250k / month</Button>
      </Modal>
    </div>
  );
};
export default TopicSelector;
