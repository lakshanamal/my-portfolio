import React from "react";

const Nav = () => {
  const name = "<LAKSHAN";
  const bracket = ">";
  return (
    <div className="nav">
      <div className="logo">
        <h2>
          {name}
          <span style={{ color: "red" }}>/</span>
          {bracket}
        </h2>
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-item resNav1">
            <h4>HOME</h4>
          </li>
          <li className="nav-item resNav2">
            <h4>ABOUT</h4>
          </li>
          <li className="nav-item resNav3">
            <h4>SKILLS</h4>
          </li>
          <li className="nav-item resNav4">
            <h4>UI/UX</h4>
          </li>
          <li className="nav-item resNav5">
            <h4>PORTFOLIO</h4>
          </li>
          <li className="nav-item resNav6">
            <h4>CONTACT</h4>
          </li>
          <li className="nav-item burger">
            <div></div>
            <div></div>
            <div></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
