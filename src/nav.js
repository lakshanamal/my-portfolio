import { ScrollLink, Link } from "react-scroll";
// const ScrollLink = Scroll.ScrollLink;

const Nav = () => {
  const sider = () => {
    const burger = document.querySelector(".burger");
    const burgerItem = document.querySelectorAll(".burger >div");
    const sideNav = document.querySelector(".side-nav");
    if (!sideNav.classList.contains("active")) {
      sideNav.classList.add("active");
      burgerItem[1].style.opacity = "0";
      burgerItem[0].style.transform = "rotate(45deg)";
      burgerItem[2].style.transform = "rotate(-45deg)";
    } else {
      sideNav.classList.remove("active");
      burgerItem[1].style.opacity = "1";
      burgerItem[0].style.transform = "rotate(0deg)";
      burgerItem[2].style.transform = "rotate(0deg)";
    }
  };

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
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-item"
              activeClass="resNav1"
            >
              {/* <h4>HOME</h4> */}
              Home
            </Link>
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

          <li className="nav-item burger" onClick={sider}>
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
