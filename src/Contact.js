import React from "react";
import "./CSS/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="header-title" style={{ float: "right" }}>
        <div className="main-title">
          <h2 style={{ marginRight: "15px" }}>CONTACT ME</h2>
        </div>
        <div className="squre"></div>
      </div>

      <div className="contact">
        <div className="contact-box">
          <div className="contact-item">
            <input type="text" name="name" id="" placeholder="Name" />
          </div>
          <div className="contact-item">
            <input type="email" name="email" id="" placeholder="Email" />
          </div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <div className="btn">
            <button>CONTACT</button>
        </div>
        </div>
     
        
      </div>
    </div>
  );
};

export default Contact;
