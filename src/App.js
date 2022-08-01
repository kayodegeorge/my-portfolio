import {useContext} from 'react'
import "./App.css";
import './index.css'
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact'

import { ThemeContext } from "./Theme";

function App() {
  
  const { theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
       <Navbar/>
       {/* <div>
       <button onClick={() => toggleTheme()}>{theme}</button>
       </div> */}
       <Hero/>
       <About/> 
       <Projects/>
       <Contact/>
       
    </div>
  ); 
}

export default App;
