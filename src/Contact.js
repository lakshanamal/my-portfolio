import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {

  const sendEmail = (event) => {
    const btn = document.getElementById("button");
    console.log(btn);
    event.preventDefault();
    btn.value = "Sending...";
    emailjs
      .sendForm(
        "service_e2bmpos",
        "template_485g7ho",
        event.target,
        "user_WkMNdPhGYowMRAUg2UWgf"
      )

      .then(
        () => {
          btn.value = "Send Email";

          alert("Sent!");
        },
        (err) => {
          btn.value = "Send Email";
          alert(JSON.stringify(err));
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="header-title" style={{ float: "right" }}>
        <div className="main-title">
          <h2 style={{ marginRight: "15px" }}>CONTACT ME</h2>
        </div>
        <div className="squre"></div>
      </div>

      <form className="contact" onSubmit={sendEmail}>
        <div className="contact-box">
          <div className="contact-item">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
           
            />
          </div>
          <div className="contact-item">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            
            />
          </div>
          <textarea
            name=""
            id="message"
            cols="30"
            rows="10"
          ></textarea>
          <div className="btn">
            <button type="submit" id="button">
              CONTACT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
