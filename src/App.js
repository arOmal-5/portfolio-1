
import './App.css';
import Aboutme from './Components/Aboutme/Aboutme';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import Welcome from './Components/Welcome/Welcome';
import Works from './Components/Works/Works';
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import ReactWhatsapp from 'react-whatsapp';
import "./DarkMode.css";







function App() {
  const setDarkMode = () =>{
   document.querySelector("body").setAttribute('data-theme','dark')
  }

  const setLightMode = () =>{
    document.querySelector("body").setAttribute('data-theme','light')
   }

   const toggleTheme = (e) => {
    if(e.target.checked) setDarkMode();
    else setLightMode()
   }
  return (

    
    <div className="App">
      <div className='static-contact'>              
                    
                     <ReactWhatsapp style={{backgroundColor:'transparent', boxShadow:'none'}} number="+916238739229" message="hey , connect to Aromal !" element='text'>
                     <i style={{color:'rgba(241, 76, 76, 0.817)'}} class="fa-brands fa-whatsapp fa-xl">  </i>
                      </ReactWhatsapp>
                   
                     <a href=""> <i class="fa-brands fa-instagram fa-xl" style={{color:''}}></i></a>
                    <a href="https://www.linkedin.com/in/aromal-s-2988961b2/" style={{color:'rgba(241, 76, 76, 0.817)'}}>   <i class="fa-brands fa-linkedin fa-xl"></i></a>
                     <a href="https://github.com/arOmal-5"> <i class="fa-brands fa-github fa-xl"></i></a>
                     
      </div>
      <Header/>
      <Welcome/>
      <Aboutme/>
      <Works/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
