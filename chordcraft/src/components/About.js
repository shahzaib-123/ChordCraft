import React from 'react';
import './About.css'; 
import mk from "../components/images/mk.jpeg";
import rana from "../components/images/rana.jpeg";
import shahzaib from "../components/images/shahzaib.jpeg";


const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
      <section className='features'>
        <h1 className='heading-features'>Meet The Team</h1>
        <div className='cards-container'>
          <div className='maincontainer'>
            <div className='card'>
              <div className='front-about-card'> <img src={shahzaib} className='card-p' alt='' /> <h3>Shahzaib Asgahr</h3>
              </div>
              <div className='back-about-card'> <p>
              A.I Specialist </p>  </div>
            </div>
          </div>
          <div className='maincontainer'>
            <div className='card'>
              <div className='front-about-card'><img src={mk} className='card-p' alt='img' /> <h3>Mehak Kanwal</h3> </div>
              <div className='back-about-card'> <p>
              FrontEnd Developer.</p>  </div>
            </div>
          </div>
          <div className='maincontainer'>
            <div className='card'>
              <div className='front-about-card'><img src={rana} className='card-p' alt='img' /><h3>Rana Abdul Rehman</h3></div>
              <div className='back-about-card'> <p>
              DevOps Specialist.</p>  </div>
            </div>
          </div>
          
          
        </div>
      </section>
      </div>
    </div>
  );
};

export default About;
