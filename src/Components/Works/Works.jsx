import React from 'react'
import './Works.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode,faJsSquare } from '@fortawesome/free-brands-svg-icons';


function Works() {
  return (
    <div className='main2' id='services'>

        <div className="container">
               <div style={{textAlign:'start'}}>
               <h5>-My Services</h5>
                <h3 style={{fontWeight:'bolder', color:'rgba(241, 76, 76, 0.817)'}}>What Can I Do</h3>
               </div>
            <div className="row">
                


                <div className="c1  col-md-4" style={{backgroundColor:'rgba(255, 255, 255, 0.043)',padding:'35px',textAlign:'start' ,margin:'10px', width:'400px',borderRadius:'20px'}}>
                <FontAwesomeIcon icon={faReact} size="4x" style={{ color: '#00d4fa' }} />
                   <h3 style={{color:'white'}}>Front-end  Projects</h3>
                   <p >rontend React Developer with a strong background in creating dynamic and responsive web applications. Proficient in JavaScript, HTML, and CSS, I specialize in leveraging React.js to build user-friendly interfaces and seamless user experiences. I have experience working with RESTful APIs, Redux for state management, and modern development tools such as Webpack, Babel, and Git.</p>
                    <a href="" style={{color:'rgba(241, 76, 76, 0.817)'}}>Know more <i class="fa-solid fa-arrow-right-long"></i></a>

                </div>
                <div className="c2 col-md-4" style={{backgroundColor:'rgba(255, 255, 255, 0.043)',padding:'35px',textAlign:'start',margin:'10px' , width:'400px' ,borderRadius:'20px'}}>
                <FontAwesomeIcon icon={faJsSquare} size="4x" style={{ color: 'rgba(241, 223, 76, 0.817)' }} />
                    <h3 style={{color:'white'}}>Javascript Projects</h3>
                    <p>I have a strong understanding of JavaScript, a versatile and widely-used programming language for web development. JavaScript powers dynamic and interactive web applications, and I am proficient in writing and implementing JavaScript code to create these engaging user experiences. Whether it's enhancing the functionality of websites or building web applications from scratch. </p>
                    <a href="" style={{color:'rgba(241, 76, 76, 0.817)'}}>Know more <i class="fa-solid fa-arrow-right-long"></i></a>


                </div>
                <div className="c3 col-md-4" style={{backgroundColor:'rgba(255, 255, 255, 0.043)',padding:'35px',textAlign:'start' ,margin:'10px' , width:'400px',borderRadius:'20px' }}>
                <FontAwesomeIcon icon={faNode} size="4x" style={{ color: 'rgba(83, 154, 83, 0.817)' }} />
                    <h3 style={{color:'white'}}>Back-end Projects</h3>
                    <p>Backend Node.js Developer with extensive experience in building robust and scalable server-side applications. Skilled in JavaScript and TypeScript, I specialize in creating APIs and microservices using Node.js and Express. My expertise includes database management with MongoDB,as well as integrating third-party services and ensuring secure authentication and authorization.</p>
                    <a href="" style={{color:'rgba(241, 76, 76, 0.817)'}}>Know more <i class="fa-solid fa-arrow-right-long"></i></a>


                </div>


                
            </div>


            <div className="row" style={{marginTop:'100px'}}>

                <div className="col-md-4 hi">
                    <div  style={{marginTop:'100px'}}>
                    <h1 style={{fontWeight:'bolder', color:'rgba(241, 76, 76, 0.817)'}}>01</h1>
                    <h3>Year Experience</h3>
                    </div>

                </div>
                <div className="col-md-4"  style={{marginLeft:'-30px'}}>
                    <div className="row" style={{backgroundColor:'rgba(255, 255, 255, 0.043)',padding:'35px',textAlign:'start' ,margin:'10px' ,borderRadius:'20px' , border:'1px solid red'}}>
                    <h4 style={{color:'rgba(241, 76, 76, 0.817)'}} >10+</h4>
                    <h4 >Front-end projects</h4>

                    </div>
                    <div id='co' className="row" style={{backgroundColor:'rgba(255, 255, 255, 0.043)',padding:'35px',textAlign:'start' ,margin:'10px',borderRadius:'20px', border:'1px solid red'}}>
                    <div >
                    <h4 style={{color:'rgba(241, 76, 76, 0.817)'}}>10+</h4>
                    <h4 >Javascript projects</h4>


                    </div>
                    
                       

                    </div>

                </div>
                <div className="col-md-4"  style={{marginLeft:'-30px'}}>
                <div className="row"style={{backgroundColor:'rgba(255, 255, 255, 0.043)',padding:'35px',textAlign:'start' ,margin:'10px',borderRadius:'20px' , border:'1px solid red'}}>
                    <h4 style={{color:'rgba(241, 76, 76, 0.817)'}}>10+</h4>
                    <h4>Back-end Projects</h4>

                    </div>
                    <div className="row" style={{backgroundColor:'rgba(255, 255, 255, 0.043)',padding:'35px',textAlign:'start' ,margin:'10px',borderRadius:'20px', border:'1px solid red'}}>
                    <h4 style={{color:'rgba(241, 76, 76, 0.817)'}}>5+</h4>
                    <h4>Certifications</h4>
                       

                    </div>
                </div>

                
            </div>
        </div>

    </div>
    
  )
}

export default Works