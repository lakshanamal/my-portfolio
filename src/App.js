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
        <Home/>
      </Element>
      <About />
      <Skills />
      <UI />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
