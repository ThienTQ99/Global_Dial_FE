import { Divider, Row, Col, Select } from "antd";
import "./style.css";
import { languages } from "../../data/CallSetting";
import { useState } from "react";
import { Fragment } from "react";

const LanguageSelector = ({ setLanguage, isCall }) => {
  const [selected, setSelected] = useState({
    _id: "6471e12fcacfcb8da29df245",
    codeName: "ja",
    name: "Japanese",
    isPremium: false,
  });

  const handleChoose = (prop) => {
    if (!isCall) {
      setLanguage(prop);
      setSelected(languages.find((o) => o._id === prop._id));
    }
  };
  const Tag = ({ prop }) => {
    return (
      <>
        {prop.name === selected.name ? (
          <Col className="tagWrap" span={12}>
            <div className="tag selected">
              {/* {prop.flag} */}
              <p className="langName">{prop.name}</p>
            </div>
          </Col>
        ) : (
          <Col className="tagWrap" span={12}>
            <div className="tag " onClick={() => handleChoose(prop)}>
              {/* {prop.flag} */}
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
              {/* <img src={prop.url} /> */}
              <p
                style={{ marginLeft: "50px", fontSize: "20px" }}
                className="langName"
              >
                {prop.name}
              </p>
            </div>
          </Col>
        ) : (
          <Col className="tagsWrap" span={24}>
            <div className="tags " onClick={() => handleChoose(prop)}>
              {/* <img src={prop.url} /> */}
              <p
                style={{ marginLeft: "50px", fontSize: "20px" }}
                className="langName"
              >
                {prop.name}
              </p>
            </div>
          </Col>
        )}
      </>
    );
  };
  return (
    <div className="containerL">
      <div className="top mt-6 mb-6">
        <h1 className="pr-4 font-semibold">Language:</h1>

        {/* <Tag prop={selected} /> */}
        <Select
           showSearch
           optionFilterProp="children"
          defaultValue={languages[0]._id}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={languages.map((item) => {
            return {
              value: item._id,
              label: item.name,
            };
          })}
          size="large"
          style={{ width: "150px" }}
          onChange={handleChoose}
        />
      </div>
      <div className="bottom">
        <Row justify="right">
          {/* {languages.map((item) => {
            return (
              <Fragment key={item._id}>
                <Tags key={item._id} prop={item} />
              </Fragment>
            );
          })} */}
        </Row>
      </div>
    </div>
  );
};
export default LanguageSelector;
