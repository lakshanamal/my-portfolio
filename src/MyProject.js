import React from "react";
import projectImg from './assests/img/ui1.png'
const Project = () => {
  return (
    <div className="ui-box">
      <div className="header-title">
        <div className="squre"></div>
        <div className="main-title">
          <h2 style={{ marginRight: "15px" }}>My Project</h2>
        </div>
      </div>
      <div className="ui-grid">
        <div>
          <h1><img src={projectImg} alt="" /></h1>
        </div>
        <div>
          <h1><img src={projectImg} alt="" /></h1>
        </div>
        <div>
          <h1><img src={projectImg} alt="" /></h1>
        </div>
        <div>
          <h1><img src={projectImg} alt="" /></h1>
        </div>
        <div>
          <h1><img src={projectImg} alt="" /></h1>
        </div>
        <div>
          <h1><img src={projectImg} alt="" /></h1>
        </div>
      </div>
    </div>
  );
};

export default Project;
