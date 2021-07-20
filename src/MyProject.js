import React, { useState, useEffect } from "react";
import projectImg from "./assests/img/ui1.png";
import recipeImage from "./assests/img/recipe.png";
import Ui from "./assests/img/3.png";
import ProjectPop from "./projectPop";
import chat from "./assests/video/pj1.mp4";
import Recipe from "./assests/video/recipe.mp4";
import Musify from "./assests/video/musify.mp4";
import MusifyImage from "./assests/img/pro3.PNG";
import Commerce from "./assests/img/commerce.PNG";
import Pesence from "./assests/img/presence.PNG";

const Project = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [tech, setTech] = useState([]);
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
            setTech(["React-native", "Firebase", "Expo"]);
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
            setLink("https://github.com/lakshanamal/recipe-app-react");
            setOpen(true);
            setVideo(Recipe);
            setTech(["ReactJS", "APIs"]);
          }}
        >
          <img style={{ width: 220 }} src={recipeImage} alt="" />
        </div>
        <div
          className="ui-grid-item"
          onClick={() => {
            setName("Music App");
            setLink("https://github.com/lakshanamal/music_app");
            setOpen(true);
            setVideo(Musify);
            setTech(["Flutter"]);
          }}
        >
          <img src={MusifyImage} alt="" />
        </div>
        <div
          className="ui-grid-item"
          onClick={() => {
            setName("E Commorce App");
            setLink("https://github.com/lakshanamal/E-COMMERCE");
            setOpen(true);
            setVideo(Commerce);
            setTech(["ReactJS", "ExpressJS", "NodeJS", "MongoDB"]);
          }}
        >
          <img src={Commerce} alt="" />
        </div>
        <div
          className="ui-grid-item"
          onClick={() => {
            setName("Presence lecture delivery and management system");
            setLink("");
            setOpen(true);
            setTech(["ReactJS", "Fastify", "NodeJS", "PostgreSQL"]);
          }}
        >
          <img src={Pesence} alt="" />
        </div>
        <div
          className="ui-grid-item"
          onClick={() => {
            setName("Bodima accomodation management system");
            setLink(
              "https://github.com/group-project-2nd-year-team-12/bodima-app"
            );
            setOpen(true);
            setTech(["HTML", "CSS", "Javascript", "PHP", "Jquery", "MySQL"]);
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
          tech={tech}
        />
      )}
    </div>
  );
};

export default Project;
