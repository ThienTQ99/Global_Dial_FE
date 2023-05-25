import { useState } from "react";
import "./style.css";

const CallButton = ({setIsCall}) => {
  const [isCalling, setIsCalling] = useState(false);

  return (
    <>
      <div
        className="mainButton"
        onClick={() => {
          setIsCalling(true);
          setIsCall(true);
        }}
      >
        {isCalling ? (
          <>
            <div className="circle circle-call">
              <img className="logoCall logoCall-call" src="/img/logo.png" />
              <div className="blink"></div>
            </div>
            <div className="tail tail-call">
              <h1>Call</h1>
            </div>
          </>
        ) : (
          <>
            <div className="circle">
              <img className="logoCall" src="/img/logo.png" />
            </div>
            <div className="tail">
              <h1>Call</h1>
            </div>
          </>
        )}
      </div>
      {isCalling && (
        <>
          <div
            style={{
              margin: "30px 40%",
              fontWeight: "600",
              fontSize: "25px",
              color: "#fff",
              display: "flex",
              marginBottom: "15px",
            }}
          >
            {" "}
            Calling...
          </div>
          <div
            className="btn-cancel"
            onClick={() => {
              setIsCalling(false);
              setIsCall(false);
            }}
          >
            Cancel
          </div>
        </>
      )}
    </>
  );
};
export default CallButton;
