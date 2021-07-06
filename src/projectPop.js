import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub, FaLinkedinIn, FaTimes } from "react-icons/fa";
const ProjectPOp = () => {
  const [over, setOver] = useState(false);
  let buttonstyle = {
    backgroundColor: "",
    position: "fixed",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
    height: "90%",
    alignSelf: "center",
    zIndex: 10,
    top: 100,
    color: "white",
    backgroundColor: "red",
    padding: 20,
  };

  return (
    <div style={buttonstyle}>
      <div style={{ width: "100%", height: 50 }}>
        <FaTimes style={{ float: "right" }} size={"30px"} />
      </div>
      <h3>Hello</h3>
      <div
        style={{ width: "70%", height: "80%", backgroundColor: "blue" }}
      >
          hello
      </div>
    <div style={{}}>

    </div>
    </div>
  );
};

export default ProjectPOp;
