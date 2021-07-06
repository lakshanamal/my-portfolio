import "./App.css";
import Nav from "./nav";
import SocialApp from "./SocialApp";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import UI from "./MyUI";
import Project from "./MyProject";
import Contact from "./Contact";
import Footer from "./Footer";
import SideNav from "./burger";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Nav />
      <SideNav />
      <SocialApp />
      <Element id="home" name="home">
        <Home />
      </Element>
      <Element id="about" name="about">
        <About />
      </Element>
      <Element id="skill" name="skill">
        <Skills />
      </Element>
      <Element id="ui" name="ui">
        <UI />
      </Element>
      <Element id="project" name="project">
        <Project />
      </Element>
      <Element id="contact" name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
