import React from 'react';

export default function Footer() {
    return (
         <footer className="footerBg py-4 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md mt-md-0 mt-4 text-white">
              <h5 className="text-uppercase fw-bold">Postal Address</h5>
              <p>
                West wing, 2nd Floor, Abhinandan Bhawan, <br></br>
                Indian Institute of Technology Indore<br></br>
                Khandwa Road, Simrol,<br></br>
                Indore, Pin code 453 552, <br></br>
                Madhya Pradesh, India
              </p>
            </div>
            <div className="col-md mt-md-0 mt-4 text-white">
              <h5 className="text-uppercase fw-bold" id="contact">Contact Us</h5>
              <p>
                <i className="fas fa-envelope mr-3 "></i>
                <span>Mail us at:</span> <br></br>
                <a href="mailto:counsellor@iiti.ac.in" className="text-white" id="hlink"> counsellor@iiti.ac.in</a> (Counsellor)
                <br></br>
                <a href="mailto:head-cs@iiti.ac.in" className="text-white" id="hlink"> head-cs@iiti.ac.in</a> (Head, Counselling Services)      
                <br></br>
                <a href="mailto:counsellingcell@iiti.ac.in" className="text-white" id="hlink">counsellingcell@iiti.ac.in</a> (Appointments)
              </p>
              <p>
                <i class="fas fa-phone mr-3"></i>
                <span>Phone:</span>
                +91 731- 660 (Ext. No. 3425)
              </p>            
            </div>
            <div className="col-md mt-md-0 mt-4 text-white">
              <h5 className="text-uppercase fw-bold">Website Created by:</h5>
              <p>
                <a href="https://www.linkedin.com/in/ishaan-mittal-/" className="text-white" id="hlink"><i class="fa fa-code pe-1"></i>Ishaan Mittal</a>
                <br></br>
                <a href="https://www.linkedin.com/in/shagun-ghatak-59a411230/" className="text-white" id="hlink"><i class="fa fa-code pe-1"></i>Shagun Ghatak</a>
              </p>
              <div className="text-white">Copyright ©2023 All rights reserved by:</div>
              <div className=""> 
                <a href="#" className="text-decoration-none">
                <strong >Counselling Services - IIT Indore</strong></a>
              </div>
            </div>
          </div>
        </div>
      </footer> 
    )
}