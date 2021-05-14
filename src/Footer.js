import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="contact-icon">
          <div className="linkedin">
            <FaFacebook size={"30px"} />
          </div>
          <div className="github">
            <FaLinkedin size={"30px"} />
          </div>
          <div className="facebook">
            <FaGithub size={"30px"} />
          </div>
          <div className="whatsapp">
            <RiWhatsappFill size={"30px"} />
          </div>
        </div>
        <h5>@2021</h5>
      </div>
    </div>
  );
};

export default Footer;
