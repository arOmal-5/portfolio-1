import React from 'react'
import './Works.css'
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
                <i class="fa-solid fa-camera-retro fa-4x" style={{color:'rgba(241, 76, 76, 0.817)'}}></i>
                   <h3 style={{color:'white'}}>UI Design</h3>
                   <p >As a UI (User Interface) designer, I specialize in crafting visually appealing and user-friendly digital experiences. With a keen eye for aesthetics and a deep understanding of user behavior, I am passionate about creating interfaces that not only look good but also offer intuitive and seamless interactions. My work focuses on enhancing the way users engage with digital products.</p>
                    <a href="" style={{color:'rgba(241, 76, 76, 0.817)'}}>Know more <i class="fa-solid fa-arrow-right-long"></i></a>

                </div>
                <div className="c2 col-md-4" style={{backgroundColor:'rgba(255, 255, 255, 0.043)',padding:'35px',textAlign:'start',margin:'10px' , width:'400px' ,borderRadius:'20px'}}>
                <i class="fa-brands fa-square-js fa-4x" style={{color:'rgba(241, 76, 76, 0.817)'}}></i>
                    <h3 style={{color:'white'}}>Javascript Projects</h3>
                    <p>I have a strong understanding of JavaScript, a versatile and widely-used programming language for web development. JavaScript powers dynamic and interactive web applications, and I am proficient in writing and implementing JavaScript code to create these engaging user experiences. Whether it's enhancing the functionality of websites or building web applications from scratch. </p>
                    <a href="" style={{color:'rgba(241, 76, 76, 0.817)'}}>Know more <i class="fa-solid fa-arrow-right-long"></i></a>


                </div>
                <div className="c3 col-md-4" style={{backgroundColor:'rgba(255, 255, 255, 0.043)',padding:'35px',textAlign:'start' ,margin:'10px' , width:'400px',borderRadius:'20px' }}>
                <i class="fa-brands fa-react fa-4x" style={{color:'rgba(241, 76, 76, 0.817)'}}></i>
                    <h3 style={{color:'white'}}>React Projects</h3>
                    <p>I possess a solid command of React,a popular JavaScript library for building user interfaces. With React, I can efficiently develop interactive and responsive web applications that provide seamless user experiences. My expertise in React enables me to create components, and optimize performance,ensuring that the applications I work on are both powerful and user-friendly.</p>
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
                    <h4 >html css projects</h4>

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
                    <h4>React Projects</h4>

                    </div>
                    <div className="row" style={{backgroundColor:'rgba(255, 255, 255, 0.043)',padding:'35px',textAlign:'start' ,margin:'10px',borderRadius:'20px', border:'1px solid red'}}>
                    <h4 style={{color:'rgba(241, 76, 76, 0.817)'}}>10+</h4>
                    <h4>API fetching</h4>
                       

                    </div>
                </div>

                
            </div>
        </div>

    </div>
    
  )
}

export default Works