import React from "react";
import HomeImg from "./assests/img/cording1.jpg";

const Skills = () => {
  return (
    <div className="skill-box">
      <div className="skill">
        <div className="header-title">
          <div className="squre"></div>
          <div className="main-title">
            <h2>MY SKILLS</h2>
          </div>
        </div>
        <div className="skill-intro">
          <h1 style={{ color: "#044A73" }}>PROFESSIONAL SKILLS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio
            debitis veniam. Vitae possimus nemo, aspernatur ipsa eaque repellat
            natus?
          </p>
        </div>

        <div className="skill-item">
          <div className="precentage" style={{ width: "80%" }}></div>
          <h2 style={{ color: "#fff" }}>JAVA</h2>
          <h2>80%</h2>
        </div>
        <div className="skill-item">
          <div className="precentage"  style={{ width: "80%" }}></div>
          <h2 style={{ color: "#fff" }}>JAVASCRIPT</h2>
          <h2>80%</h2>
        </div>
        <div className="skill-item">
          <div className="precentage"  style={{ width: "70%" }}></div>
          <h2 style={{ color: "#fff" }}>PHP</h2>
          <h2>70%</h2>
        </div>
        <div className="skill-item">
          <div className="precentage"  style={{ width: "70%" }}></div>
          <h2 style={{ color: "#fff" }}>C++</h2>
          <h2>70%</h2>
        </div>
        <div className="skill-item">
          <div className="precentage"  style={{ width: "85%" }}></div>
          <h2 style={{ color: "#fff" }}>HTML</h2>
          <h2>85%</h2>
        </div>
        <div className="skill-item">
          <div className="precentage"  style={{ width: "85%" }}></div>
          <h2 style={{ color: "#fff" }}>CSS</h2>
          <h2>85%</h2>
        </div>
      </div>
      <div className="skill-img">
        <img src={HomeImg} alt="" />
      </div>
    </div>
  );
};

export default Skills;
