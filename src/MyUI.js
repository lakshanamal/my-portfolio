import React from "react";
import "./CSS/ui.css";

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
          <div><h1>hello</h1></div>
          <div><h1>hello</h1></div>
          <div><h1>hello</h1></div>
          <div><h1>hello</h1></div>
          <div><h1>hello</h1></div>
          <div><h1>hello</h1></div>
      </div>
    </div>
  );
};

export default UI;
