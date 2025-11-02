import React from "react";
import { AboutMe } from './components/AboutMe';
import Navbar from './components/Navbar';
import Experience from './components/Experience'
import Projects from './components/Projects';
import './App.css';

const App=()=>{
  const aboutMeRef = React.useRef(null);
  const experienceRef = React.useRef(null);
  const projectsRef = React.useRef(null);

  return (
    <div className="app-root">
      <Navbar 
        aboutMeRef={aboutMeRef} 
        experienceRef={experienceRef} 
        projectsRef={projectsRef} 
      />
      <AboutMe ref={aboutMeRef}/>
      <Experience ref={experienceRef}/>
      <Projects ref={projectsRef} />
    </div>
  );
}

export default App;