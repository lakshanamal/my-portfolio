import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTimes } from "react-icons/fa";
import ReactPlayer from "react-player";

const ProjectPOp = ({ stateChanger, name, link, video, tech }) => {
  const [isClose, setIsClose] = useState(false);

  let buttonstyle = {
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
    // display: "none",
  };
  let buttonstyleNone = {
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
    display: "none",
  };

  // const close = () => {
  //   setIsClose(true);
  // };

  const redirectGit = () => {
    window.location.href = link;
  };

  return (
    <div style={isClose ? buttonstyleNone : buttonstyle}>
      <div style={{ width: "100%", height: 30 }}>
        <FaTimes
          style={{ float: "right", cursor: "pointer" }}
          onClick={() => {
            stateChanger(false);
          }}
          size={"30px"}
        />
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
            url={video}
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
          <h3>{name}</h3>

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
              {tech.map((item) => {
                return (
                  <h4
                    style={{
                      padding: 5,
                      background: "blue",
                      alignSelf: "flex-end",
                      color: "white",
                      borderRadius: 5,
                      minWidth: 10,
                      marginBottom: 5,
                    }}
                  >
                    {item}
                  </h4>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPOp;
