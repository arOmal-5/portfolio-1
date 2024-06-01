import React from 'react'
import './Projects.css'
import img1 from '../images/scrn1.png'
import img2 from '../images/scrn2.png'
import img3 from '../images/scrn3.png'
import img4 from '../images/scrn4.png'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function Projects() {
  return (

    <div className="main2" id='works'>
      <div className='container w-75' style={{marginTop:'40px'}}>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <div style={{textAlign:'start'}}>
          <h3 style={{fontWeight:'bolder', color:'rgba(241, 76, 76, 0.817)'}}>Featured Projects</h3>
        <p>Here is some of them</p>
          </div>
          <div >
          <a href="https://www.linkedin.com/in/aromal-s-2988961b2/recent-activity/all/" style={{color:'rgba(241, 76, 76, 0.817)'}}> <button className='btn' style={{backgroundColor:'rgba(241, 76, 76, 0.817)', fontWeight:'bolder', color:'white'}}>Know more <i class="fa-solid fa-arrow-right-long"></i></button> </a>
          </div>
        
        </div>
        <div className="row" style={{display:'flex', justifyContent:'space-around'}}>
          
            <div className="col-md-6" style={{backgroundColor:'rgba(255, 255, 255, 0.043) ma', padding:'20px', width:'400px'}}>
              
             
              <MDBCard >
              <a href="https://lnkd.in/gryMhAGs"><MDBCardImage style={{border:'1px solid white'}} src={img1} position='top' alt='...' /></a>
    
              </MDBCard>
              
              
             
              <div style={{textAlign:'start', marginTop:'10px'}}>
              <h5 style={{fontWeight:'bolder', color:'white'}}>CARSTER</h5>
              <a href="https://lnkd.in/gryMhAGs" style={{color:'rgba(241, 76, 76, 0.817)'}}>Know more <i class="fa-solid fa-arrow-right-long"></i></a>
              </div>
             
            </div>
            <div className="col-md-6" style={{backgroundColor:'rgba(255, 255, 255, 0.043) ma', padding:'20px', width:'400px'}}>
              
              <MDBCard>
              <a href=" https://lnkd.in/gBJhvCWk"> <MDBCardImage  style={{border:'1px solid white'}} src={img2} position='top' alt='...' /></a>
    
    </MDBCard>
             
            
            <div style={{textAlign:'start', marginTop:'10px'}}>
              <h5 style={{fontWeight:'bolder', color:'white'}}>FOODVERSE</h5>
              <a href=" https://lnkd.in/gBJhvCWk" style={{color:'rgba(241, 76, 76, 0.817)'}}>Know more <i class="fa-solid fa-arrow-right-long"></i></a>
              </div>

            </div>
            
        </div>
        

        <div className="row" style={{display:'flex', justifyContent:'space-around'}}>
        <div className="col-md-6" style={{backgroundColor:'rgba(255, 255, 255, 0.043) ma', padding:'20px', width:'400px'}}>
             
              <MDBCard>
              <a href="https://brilliant-biscotti-37c148.netlify.app"><MDBCardImage  style={{border:'1px solid white'}} src={img3} position='top' alt='...' /></a>
    
    </MDBCard>
              
              <div style={{textAlign:'start', marginTop:'10px'}}>
              <h5 style={{fontWeight:'bolder', color:'white'}}>EAT AND BITE</h5>
              <a href="https://brilliant-biscotti-37c148.netlify.app" style={{color:'rgba(241, 76, 76, 0.817)'}}>Know more <i class="fa-solid fa-arrow-right-long"></i></a>
              </div>
             
            </div>
            <div className="col-md-6" style={{backgroundColor:'rgba(255, 255, 255, 0.043) ma', padding:'20px', width:'400px'}}>
             
              <MDBCard>
      <MDBCardImage  style={{border:'1px solid white'}} src={img4} position='top' alt='...'a />
    
    </MDBCard>
            
            
            <div style={{textAlign:'start', marginTop:'10px'}}>
              <h5 style={{fontWeight:'bolder', color:'white'}}>MEDIA PLAYER</h5>
              <a href="" style={{color:'rgba(241, 76, 76, 0.817)'}}>Know more <i class="fa-solid fa-arrow-right-long"></i></a>
              </div>

            </div>
            
        </div>
        
    </div>

    </div>
    
  )
}

export default Projects