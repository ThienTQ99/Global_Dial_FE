import { Divider, Row, Col } from "antd";
import "./style.css";
import {  topic } from "../../data/CallSetting";
import { useState } from "react";


const TopicSelector = ({setTopic,isCall}) => {
  const [selected, setSelected] = useState("Anime");

  

  const handleChoose=(name)=>{
    
    if(!isCall){

      setTopic(name)
      setSelected(topic.find((o)=>
          o===name
      ))
    }
  }
  const Tag = ({ prop }) => {
    return (
      <>
        {prop === selected ? (
          <div className="tagWrapT" >
            <div className="tagT selectedT">
              
              <p className="langName">{prop}</p>
            </div>
          </div>
        ) : (
          <div className="tagWrapT" >
            <div className="tagT " onClick={()=>handleChoose(prop)}>
             
              <p className="langName">{prop}</p>
            </div>
          </div>
        )}
      </>
    );
  };
  return (
    <div className="container">
      <div className="top">
        <h1 style={{marginRight:'15px'}}>Topic:</h1>

        <Tag prop={selected} />
      </div>
      <Divider />
      <div className="bottom">
        <Row style={{padding:'0px 30px'}} justify="center">
          {topic.map((item, index) => {
            return (
              <>
                <Tag prop={item} />
              </>
            );
          })}
        </Row>
      </div>
    </div>
  );
};
export default TopicSelector;
