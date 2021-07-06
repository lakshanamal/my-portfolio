import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub, FaLinkedinIn, FaTimes } from "react-icons/fa";
import ReactPlayer from "react-player";
import pj1 from "./assests/video/pj1.mp4";

const ProjectPOp = () => {
  const [over, setOver] = useState(false);
  let buttonstyle = {
    backgroundColor: "",
    position: "fixed",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
    height: "85%",
    alignSelf: "center",
    zIndex: 10,
    top: 100,
    color: "white",
    backgroundColor: "#0B1D36",
    padding: 20,
    borderRedius: 10,
  };

  return (
    <div style={buttonstyle}>
      <div style={{ width: "100%", height: 30 }}>
        <FaTimes onClick={} style={{ float: "right" }} size={"30px"} />
      </div>
      <h1 style={{ padding: 10 }}>Demostration</h1>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ width: "70%", height: "80%", backgroundColor: "white" }}>
          <ReactPlayer
            borderRedius={10}
            width="100%"
            controls={true}
            height="100%"
            url={pj1}
          />
        </div>
        <div
          style={{
            width: "20%",
            backgroundColor: "#E2E7F1",
            height: "80%",
            padding: 20,
            color: "#4B6171",
          }}
        >
          <h3>Get GitHub code :</h3>
          <h5 style={{ width: 10, cursor: "pointer" }}>
            https://github.com/lakshanamal/ChatApp_reactNative
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProjectPOp;
