import { Divider, Row, Col } from "antd";
import "./style.css";
import { topics } from "../../data/CallSetting";
import { useState } from "react";
import { Fragment } from "react";

const TopicSelector = ({ setTopic, isCall }) => {
  const [selected, setSelected] = useState({
    _id: "6472c4e3cacfcb8da2fc4ad9",
    codeName: "literature",
    name: "Literature",
    isPremium: true,
  });

  const handleChoose = (id) => {
    if (!isCall) {
      setTopic(id);
      setSelected(topics.find((o) => o._id === id));
    }
  };
  const Tag = ({ prop }) => {
    return (
      <>
        {prop === selected ? (
          <div className="tagWrapT">
            <div className="tagT selectedT">
              <p className="langName">{prop.name}</p>
            </div>
          </div>
        ) : (
          <div className="tagWrapT">
            <div className="tagT " onClick={() => handleChoose(prop._id)}>
              <p className="langName">{prop.name}</p>
            </div>
          </div>
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
    </div>
  );
};
export default TopicSelector;
