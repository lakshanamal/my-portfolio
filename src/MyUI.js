import React from "react";
import Ui1 from "./assests/img/ui1.png";
import Ui2 from "./assests/img/ui2.png";
import Ui3 from "./assests/img/1.png";
import Ui4 from "./assests/img/3.png";
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
        <div
          onClick={() => {
            window.location.href =
              "https://www.behance.net/gallery/119947723/Fazional-E-commerce";
          }}
        >
          <h1>
            <img src={Ui1} alt="" />
          </h1>
        </div>
        <div
          onClick={() => {
            window.location.href =
              "https://www.behance.net/gallery/119947723/Fazional-E-commerce";
          }}
        >
          <h1>
            <img src={Ui2} alt="" />
          </h1>
        </div>
        <div>
          <h1>
            <img src={Ui3} alt="" />
          </h1>
        </div>
        <div
          onClick={() => {
            window.location.href =
              "https://www.behance.net/gallery/122270741/Chat-Application";
          }}
        >
          <h1>
            <img src={Ui4} alt="" />
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
