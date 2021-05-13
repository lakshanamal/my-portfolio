
import './App.css';
import Nav from './nav'
import SocialApp from './SocialApp'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import UI from './MyUI'
import Project from './MyProject'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Nav/>
      <SocialApp/>
      <Home/>
      <About/>
      <Skills/>
      <UI/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
