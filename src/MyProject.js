import React, { useState, useEffect } from "react";
import projectImg from "./assests/img/ui1.png";
import ProjectPop from "./projectPop";
const Project = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [tech, setTech] = useState({});

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
            setName("Memo Chat application");
            setOpen(true);
          }}
        >
          <img src={projectImg} alt="" />

          <div style={{ position: "absolute" }}>
            <h2>Hello</h2>
          </div>
        </div>

        <div
          className="ui-grid-item"
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src={projectImg} alt="" />
        </div>
        <div
          className="ui-grid-item"
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src={projectImg} alt="" />
        </div>
        <div
          className="ui-grid-item"
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src={projectImg} alt="" />
        </div>
        <div
          className="ui-grid-item"
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src={projectImg} alt="" />
        </div>
        <div
          className="ui-grid-item"
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src={projectImg} alt="" />
        </div>
      </div>
      {open && <ProjectPop stateChanger={setOpen} name={name} />}
    </div>
  );
};

export default Project;
