import React from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FaGithub,FaLinkedinIn,FaTimes } from "react-icons/fa";

const SocialApp=()=>{
    return(
        <div className="social">
            <div className="burger-social">
                <div></div>
                <div style={{width:"30px"}}></div>
            </div>
            <div className="social-item"><FaLinkedinIn size={"30px"}/></div>
            <div className="social-item"> <FaGithub size={"30px"}/></div>           
        </div>
    );
}

export default SocialApp;