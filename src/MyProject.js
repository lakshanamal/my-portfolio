import React, { useState, useEffect } from "react";
import projectImg from "./assests/img/ui1.png";
import Ui from "./assests/img/3.png";
import ProjectPop from "./projectPop";
import chat from "./assests/video/pj1.mp4";
import Recipe from "./assests/video/recipe.mp4";
import Musify from "./assests/video/musify.mp4";

const Project = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [tech, setTech] = useState({});
  const [video, setVideo] = useState("");
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
            setLink("https://github.com/lakshanamal/ChatApp_reactNative");
            setOpen(true);
            setVideo(chat);
          }}
        >
          <img src={Ui} alt="" />

          <div style={{ position: "absolute" }}>
            <h2>Hello</h2>
          </div>
        </div>

        <div
          className="ui-grid-item"
          onClick={() => {
            setName("Recipe App");
            setLink("https://github.com/lakshanamal/ChatApp_reactNative");
            setOpen(true);
            setVideo(Recipe);
          }}
        >
          <img src={projectImg} alt="" />
        </div>
        <div
          className="ui-grid-item"
          onClick={() => {
            setName("Music App");
            setLink("https://github.com/lakshanamal/ChatApp_reactNative");
            setOpen(true);
            setVideo(Musify);
          }}
        >
          <img src={projectImg} alt="" />
        </div>
        <div
          className="ui-grid-item"
          onClick={() => {
            setName("E Commorce App");
            setLink("https://github.com/lakshanamal/ChatApp_reactNative");
            setOpen(true);
          }}
        >
          <img src={projectImg} alt="" />
        </div>
        <div
          className="ui-grid-item"
          onClick={() => {
            setName("Memo Chat application");
            setLink("https://github.com/lakshanamal/ChatApp_reactNative");
            setOpen(true);
          }}
        >
          <img src={projectImg} alt="" />
        </div>
        <div
          className="ui-grid-item"
          onClick={() => {
            setName("Memo Chat application");
            setLink("https://github.com/lakshanamal/ChatApp_reactNative");
            setOpen(true);
          }}
        >
          <img src={projectImg} alt="" />
        </div>
      </div>
      {open && (
        <ProjectPop
          stateChanger={setOpen}
          name={name}
          link={link}
          video={video}
        />
      )}
    </div>
  );
};

export default Project;
