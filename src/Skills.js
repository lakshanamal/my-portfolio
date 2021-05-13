import React from "react";
import HomeImg from "./assests/img/index.png";
import "./CSS/skills.css";

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
          <div className="precentage"></div>
          <h2 style={{color:"#fff"}}>name</h2>
          <h2>10%</h2>
        </div>
        <div className="skill-item">
          <div className="precentage"></div>
          <h2 style={{color:"#fff"}}>name</h2>
          <h2>10%</h2>
        </div>
        <div className="skill-item">
          <div className="precentage"></div>
          <h2 style={{color:"#fff"}}>name</h2>
          <h2>10%</h2>
        </div>
        <div className="skill-item">
          <div className="precentage"></div>
          <h2 style={{color:"#fff"}}>name</h2>
          <h2>10%</h2>
        </div>
        <div className="skill-item">
          <div className="precentage"></div>
          <h2 style={{color:"#fff"}}>name</h2>
          <h2>10%</h2>
        </div>
      </div>
      <div className="homeImg">
        <img src={HomeImg} alt="" />
      </div>
    </div>
  );
};

export default Skills;
