import React, { useState, useEffect } from "react";
import projectImg from "./assests/img/ui1.png";
import ProjectPop from "./projectPop";
const Project = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="ui-box">
      <div className="header-title">
        <div className="squre"></div>
        <div className="main-title">
          <h2 style={{ marginRight: "15px" }}>My Project</h2>
        </div>
      </div>
      <div className="ui-grid">
        <div
          className="ui-grid-item"
          onClick={() => {
            setOpen(true);
          }}
        >
          <h1>
            <img src={projectImg} alt="" />
          </h1>
        </div>
        <div
          className="ui-grid-item"
          onClick={() => {
            setOpen(true);
          }}
        >
          <h1>
            <img src={projectImg} alt="" />
          </h1>
        </div>
        <div
          className="ui-grid-item"
          onClick={() => {
            setOpen(true);
          }}
        >
          <h1>
            <img src={projectImg} alt="" />
          </h1>
        </div>
        <div
          className="ui-grid-item"
          onClick={() => {
            setOpen(true);
          }}
        >
          <h1>
            <img src={projectImg} alt="" />
          </h1>
        </div>
        <div
          className="ui-grid-item"
          onClick={() => {
            setOpen(true);
          }}
        >
          <h1>
            <img src={projectImg} alt="" />
          </h1>
        </div>
        <div
          className="ui-grid-item"
          onClick={() => {
            setOpen(true);
          }}
        >
          <h1>
            <img src={projectImg} alt="" />
          </h1>
        </div>
      </div>
      {open && <ProjectPop stateChanger={setOpen} />}
    </div>
  );
};

export default Project;
