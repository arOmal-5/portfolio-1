import React from 'react'
import './Contact.css'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';

function Contact() {
  return (
   <div style={{width:'100%', backgroundColor:'black'}} id='contact'>
    
        <div className="container ">
            <div style={{width:'100%', textAlign:'center'}}>
            <h1 style={{fontWeight:'bolder'}}>GET IN <span style={{color:'rgba(241, 76, 76, 0.817)'}}>TOUCH</span></h1>

            </div>
        <div className="row">
            
       
      <div className="col-md-4" style={{color:'white'}}>
        <h3> DON'T BE SHY !</h3>
        <p>Feel free to contact with me.I am always open to discussing new projects,creative ideas of oppertunities to be part of your visions</p>

        <div style={{padding:'10px'}} >
            <h5> <i class="fa-solid fa-location-dot fa-1x" ></i>  Adress Point  </h5>
            <p> Aaramam <br />Punthalathazham Nagar <br />Kollam -691004 </p>
            
        </div>


        <div style={{padding:'10px'}} >
            <h5> <i class="fa-regular fa-envelope fa-1x"></i>  Mail Me</h5>
            <p>aromalsureshr@gmail.com</p>
        </div>

        <div style={{padding:'10px'}}>
            <h5> <i class="fa-solid fa-phone fa-1x"></i>  Call Me</h5>
            <p>+91 6238739229</p>

        </div>
      </div>


      <div className="col-md-8" style={{marginTop:'50px'}}>


        <div className="row" style={{marginBottom:'40px'}}>
            <div className="col-md-6">
            <MDBInput  label='Name' id='form1' type='text'placeholder='Name' />
            </div>
            <div className="col-md-6">
            <MDBInput label='Email' id='form1' type='text' placeholder='Email' />
            </div>
        </div>
     


      <div className="row" style={{marginBottom:'40px'}}>
        <div className="col-md-12">
        <MDBInput label='Subject' id='form1' type='text'placeholder='Subject' />
        </div>
      </div>

      <div className="row" >
        <div className="col-md-12">
        <MDBTextArea label='Message' id='textAreaExample' rows={4} placeholder='Message' />
        </div>
      </div>
        


      <button className='btn' style={{color:'white', backgroundColor:'rgba(241, 76, 76, 0.817)', border:'1px solid red', borderRadius:'5px', marginTop:'15px'}}>Sent message</button>
      </div>
      
      </div>
      
    </div>


    
   </div>
  )
}

export default Contact