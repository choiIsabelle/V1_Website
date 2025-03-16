import React, { useRef } from "react";
import './App.css';
import { AboutMe } from './components/AboutMe';
import Navbar from './components/Navbar';
import Experience from './components/Experience'
import Projects from './components/Projects';

const App=()=>{
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div className="App">
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