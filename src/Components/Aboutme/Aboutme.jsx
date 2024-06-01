import React from 'react'
import './Aboutme.css'
import pic from '../images/mee.jpg'




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
                    <h4>Tailwind css</h4>
                    <h4>JAVASCRIPT</h4>
                    <h4>REACT</h4>
                    <h4>Node js</h4>
                    <h4>Express</h4>
                    <h4>Mongo db</h4>
                  </div>

                   </div>
                </div>
                <div className="cool col-md-4" 
                style={{alignItems:'center', alignSelf:'center'}} >
                    <div className='container fluid'>
                       <img src={pic} style={{width:'100%', height:'100%', borderRadius:'20px'}} alt="" />
                  
                   


                    </div>
                    
                </div>
                <div className="col-md-4">
                    {/* myself */}
                    <div className='col3'>
                    <h6 style={{color:'rgba(241, 76, 76, 0.817)', fontWeight:'bolder'}}>WHO AM I</h6>
                    <h2>AROMAL S</h2>
                    <h5> MERN Developer</h5>
                    <p>I am a passionate and results-driven MEARN (MongoDB, Express.js, Angular,React, Node.js) developer with a strong foundation in full-stack web development. My journey in the world of programming began with a fascination for creating interactive and dynamic web applications. Over the years, I've honed my skills and accumulated valuable experience that has allowed me to craft robust and efficient solutions.</p>
                   
                    </div>
                </div>
            </div>
        </div>


        </div>
    </div>
  )
}

export default Aboutme