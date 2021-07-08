import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub, FaLinkedinIn, FaTimes } from "react-icons/fa";
import ReactPlayer from "react-player";
import pj1 from "./assests/video/pj1.mp4";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ProjectPOp = (code, tech) => {
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

  const redirectGit = () => {
    window.location.href = "https://github.com/lakshanamal/ChatApp_reactNative";
  };

  return (
    <div style={buttonstyle}>
      <div style={{ width: "100%", height: 30 }}>
        <FaTimes style={{ float: "right" }} size={"30px"} />
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
        <div
          style={{
            width: "70%",
            height: "80%",
            backgroundColor: "rgb(221, 221, 255)",
          }}
        >
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
          <h3>Memo Chat application</h3>

          <div style={{ paddingTop: 10 }}>
            <h3
              onClick={redirectGit}
              style={{ color: "green", cursor: "pointer" }}
            >
              Get GitHub code
            </h3>
          </div>
          <div style={{ paddingTop: 10 }}>
            <h3>Technology that used </h3>
            <div>
              <h4
                style={{
                  padding: 5,
                  background: "red",
                  alignSelf: "flex-end",
                  color: "white",
                  borderRadius: 5,
                  minWidth: 10,
                }}
              >
                React-Native
              </h4>
              <h4
                style={{
                  padding: 5,
                  background: "pink",
                  alignSelf: "flex-end",
                  color: "white",
                  borderRadius: 5,
                  minWidth: 10,
                  marginTop: 5,
                }}
              >
                ReactJs
              </h4>
              <h4
                style={{
                  padding: 5,
                  background: "orange",
                  alignSelf: "flex-end",
                  color: "white",
                  borderRadius: 5,
                  minWidth: 10,
                  marginTop: 5,
                }}
              >
                ReactJs
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPOp;
