import React from "react-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaLinkedinIn, FaTimes } from "react-icons/fa";

const SocialApp = () => {
  return (
    <div className="social">
      <div className="burger-social">
        <div></div>
        <div style={{ width: "30px" }}></div>
      </div>
      <div
        className="social-item"
        onClick={() => {
          window.location.href =
            "https://www.linkedin.com/in/amal-lakshan-211976189/";
        }}
      >
        <FaLinkedinIn size={"30px"} />
      </div>
      <div className="social-item">
        {" "}
        <FaGithub
          size={"30px"}
          onClick={() => {
            window.location.href = "https://github.com/lakshanamal";
          }}
        />
      </div>
    </div>
  );
};

export default SocialApp;
