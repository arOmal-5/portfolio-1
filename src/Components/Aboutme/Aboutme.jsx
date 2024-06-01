import React from 'react'
import './Aboutme.css'
import pic from '../images/me.jpg'




function Aboutme() {
  return (
    <div id='about'>

        <div className="main">
        <div className="container2 ">
            <div className="row">
                <div className="col-md-4 ">
                   <div className='col1'> 
                    {/* skills */}
                   
                  <div className='skills'>
                  <h1>About </h1>
                    <h1>Me</h1>
                  
                    <h4>HTML</h4>
                    <h4>CSS</h4>
                    <h4>BOOTSTRAP</h4>
                    <h4>JAVASCRIPT</h4>
                    <h4>REACT</h4>
                  </div>

                   </div>
                </div>
                <div className="cool col-md-4" >
                    <div className='container fluid'>
                       <img src={pic} style={{width:'100%', height:'100%', borderRadius:'20px'}} alt="" />
                  
                   


                    </div>
                    
                </div>
                <div className="col-md-4">
                    {/* myself */}
                    <div className='col3'>
                    <h6 style={{color:'rgba(241, 76, 76, 0.817)', fontWeight:'bolder'}}>WHO AM I</h6>
                    <h2>AROMAL S</h2>
                    <h5>Proffesional MEARN Developer</h5>
                    <p>I am a passionate and results-driven MEARN (MongoDB, Express.js, Angular,React, Node.js) developer with a strong foundation in full-stack web development. My journey in the world of programming began with a fascination for creating interactive and dynamic web applications. Over the years, I've honed my skills and accumulated valuable experience that has allowed me to craft robust and efficient solutions.</p>
                    <h6 style={{color:'red'}}>Follow me-</h6>
                    <a href="https://web.whatsapp.com/" style={{color:'rgba(241, 76, 76, 0.817)'}}> <i class="fa-brands fa-whatsapp fa-2x"></i></a>
                     <a href=""> <i class="fa-brands fa-instagram fa-2x" style={{color:''}}></i></a>
                    <a href="https://www.linkedin.com/in/aromal-s-2988961b2/" style={{color:'rgba(241, 76, 76, 0.817)'}}>   <i class="fa-brands fa-linkedin fa-2x"></i></a>
                     <a href="https://github.com/aromalsur"> <i class="fa-brands fa-github fa-2x"></i></a>
                    </div>
                </div>
            </div>
        </div>


        </div>
    </div>
  )
}

export default Aboutme