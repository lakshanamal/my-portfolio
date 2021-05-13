import react from "react";
import AboutImg from "./assests/img/about.png";
import "./CSS/about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-img">
        <img src={AboutImg} alt="" />
      </div>
      <div className="about-box">
        <div className="header-title" style={{ float: "right" }}>
          <div className="main-title" style={{ marginRight: "15px" }}>
            <h2>ABOUT ME</h2>
          </div>
          <div className="squre"></div>
        </div>
        <div className="introduction">
          <h1>
            HI! <span style={{ color: "#044A73" }}>THERE,</span>
          </h1>
          <p>
            I am an web developer. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Doloremque voluptatum voluptatem quaerat, velit at
            autem recusandae esse nostrum modi nemo!
          </p>
        </div>
        <div className="about-me">
          <h1>GENERAL INFO</h1>
          <div className="about-item">
            <div></div>
            <h3 className="details">DOB</h3>
            <h3>22nd of june 1997</h3>
          </div>
          <div className="about-item">
            <div></div>
            <h3 className="details">Address</h3>
            <h3>Delgasduwa, Dodanduwa</h3>
          </div>
          <div className="about-item">
            <div></div>
            <h3 className="details">Phone</h3>
            <h3>+94755535393</h3>
          </div>
          <div className="about-item">
            <div></div>
            <h3 className="details">Email</h3>
            <h3>lakshanamal100@gmail.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
