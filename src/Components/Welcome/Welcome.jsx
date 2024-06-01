import React, { useEffect } from 'react'
import './Welcome.css'
import html from '../images/HTML5.svg'
import css from '../images/css.svg'
import bs from '../images/Bootstrap_logo.svg'
import mu from '../images/material-ui.svg'
import tw from '../images/Tailwind_CSS_logo.svg'
import js from '../images/js.svg'
import react from '../images/React-icon.svg'
import mongo from '../images/MongoDB_Logo.svg'
import git from '../images/Octicons-mark-github.svg'
import vercel from '../images/Vercel_logo_black.svg'
import aws from '../images/Amazon_Web_Services_Logo.svg'
import npm from '../images/Npm-logo.svg'
import { red } from '@mui/material/colors'




function Welcome() {

  useEffect(() => {
    const logosContainer = document.querySelector('.logos');

    const handleWheel = (e) => {
      e.preventDefault();
      logosContainer.scrollBy({
        left: e.deltaY,
        behavior: 'smooth' // Smooth scrolling
      });
    };

    logosContainer.addEventListener('wheel', handleWheel);

    return () => {
      logosContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);
  return (


    
    <div>
            <div className="main12" id='home'>

            <div className='container'>
              <div className="row">
              <div className="col-md-12">
              <h1>Hi There!</h1>
              <h2>I AM <span style={{color:'rgba(241, 76, 76, 0.817)'}}>AROMAL</span></h2>
              <h3>I make the complex simple</h3>

              <div className='btns'>
                <a href="#works"><button className='btn'>View Work</button></a>
                <a href="https://www.linkedin.com/in/aromal-s-2988961b2/"><button className='btn'>Hire Me</button></a>
              </div>
              </div>
              </div>

              <div className='row'>
              <h1 style={{margin:'2rem'}}>Technologies i know</h1>

                <div className="logos">
                  
                 

                
                 
                 
                 
                 <img src={tw} alt="" style={{height:'2rem'}} />
                 <img src={js} alt="" style={{height:'3rem'}} />
                 <img src={react} alt="" style={{height:'4rem'}} />
                 <img src={css} alt="" style={{height:'5rem'}} />
                 <img src={bs} alt="" style={{height:'5rem'}} />
                 <img src={mu} alt="" style={{height:'5rem'}} />
                 <img src={html} alt="" style={{height:'5rem'}} />
                 <img src={bs} alt="" style={{height:'5rem'}} />
                 <img src={mongo} alt="" style={{height:'5rem'}} />
                 <img src={git} alt="" style={{height:'5rem'}} />
                 <img src={aws} alt="" style={{height:'5rem'}} />
                 <img src={npm} alt="" style={{height:'5rem'}} />
                 <img src={vercel} alt="" style={{height:'5rem', color:red}} />


          

                </div>


              </div>
              

                </div>

            </div>

      

    </div>
  )
}



export default Welcome