import {useContext} from 'react'
import "./App.css";
import './index.css'
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import Footer  from './components/Footer';
import { ThemeContext } from "./Theme";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
       <Navbar/>
       <Hero/>
       <About/> 
       <Projects/>
       <Contact/>
       <Footer/>
    </div>
  ); 
}

export default App;
