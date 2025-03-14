import './App.css';
import { AboutMe } from './components/AboutMe';
import Navbar from './components/Navbar';
import Experience from './components/Experience'
import Projects from './components/Projects';

const App=()=>{
  return (
    <div className="App">
      <Navbar/>
      <AboutMe/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;