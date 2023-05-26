import { Divider, Row, Col } from "antd";
import "./style.css";
import { language } from "../../data/CallSetting";
import { useState } from "react";
import UK from "../../image/UK";
import { Fragment } from "react";

const LanguageSelector = ({setLanguage, isCall}) => {
  const [selected, setSelected] = useState({
    name: "English",
    flag: <UK />,
  });

  
  const handleChoose=(name)=>{
    
    if(!isCall){

      setLanguage(name)
      setSelected(language.find((o)=>
          o.name===name
      ))
    }
  }
  const Tag = ({ prop }) => {
    return (
      <>
        {prop.name === selected.name ? (
          <Col className="tagWrap" span={12}>
            <div className="tag selected">
              {prop.flag}
              <p className="langName">{prop.name}</p>
            </div>
          </Col>
        ) : (
          <Col className="tagWrap" span={12}>
            <div className="tag " onClick={()=>handleChoose(prop.name)}>
              {prop.flag}
              <p className="langName">{prop.name}</p>
            </div>
          </Col>
        )}
      </>
    );
  };

  const Tags = ({ prop }) => {
    return (
      <>
        {prop.name === selected.name ? (
          <Col className="tagsWrap" span={24}>
            <div className="tags selected">
              <img src={prop.url} />
              <p style={{marginLeft:'50px', fontSize:'20px'}} className="langName">{prop.name}</p>
            </div>
          </Col>
        ) : (
          <Col className="tagsWrap" span={24}>
            <div className="tags " onClick={()=>handleChoose(prop.name)}>
              <img src={prop.url} />
              <p style={{marginLeft:'50px', fontSize:'20px'}} className="langName">{prop.name}</p>
            </div>
          </Col>
        )}
      </>
    );
  };
  return (
    <div className="containerL">
      <div className="top">
        <h1>Language:</h1>

        <Tag prop={selected} />
      </div>
      <Divider />
      <div className="bottom">
        <Row justify="right">
          {language.map((item, index) => {
            return (
              <Fragment key={index}>
                <Tags key={index} prop={item} />
              </Fragment>
            );
          })}
        </Row>
        
      </div>
    </div>
  );
};
export default LanguageSelector;
