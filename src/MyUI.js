import React from "react";
import Ui1 from "./assests/img/ui1.png";

const UI = () => {
  return (
    <div className="ui-box">
      <div className="header-title" style={{ float: "right" }}>
        <div className="main-title">
          <h2 style={{ marginRight: "15px" }}>MY UI/UX DESIGN</h2>
        </div>
        <div className="squre"></div>
      </div>
      <div className="ui-grid">
        <div>
          <h1>
            <img src={Ui1} alt="" />
          </h1>
        </div>
        <div>
          <h1>
            <img src={Ui1} alt="" />
          </h1>
        </div>
        <div>
          <h1>
            <img src={Ui1} alt="" />
          </h1>
        </div>
        <div>
          <h1>
            <img src={Ui1} alt="" />
          </h1>
        </div>
        <div>
          <h1>
            <img src={Ui1} alt="" />
          </h1>
        </div>
        <div>
          <h1>
            <img src={Ui1} alt="" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UI;
