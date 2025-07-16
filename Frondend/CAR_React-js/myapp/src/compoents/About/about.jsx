
import React from 'react';
import'./about.css';
import image1 from '../Asserts/aboutimg1.avif';
import image2 from '../Asserts/aboutimg3.jpg';
import image3 from '../Asserts/aboutimg4.jpeg';
import image4 from '../Asserts/aboutimg4.jpeg';
import image5 from '../Asserts/aboutimg6.jpeg';
import image6 from '../Asserts/aboutimg7.jpeg';
import image7 from '../Asserts/aboutimg8.jpeg';
import image8 from '../Asserts/aboutimg9.jpeg';

import images1 from '../Asserts/aboutimage1.jpg';



const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <div className="section-label">— MEET BMW</div>
              <h2 className="about-title">About Us</h2>
              <h3 className="about-subtitle">
                Our Journey with BMW Excellence
              </h3>
              <div className="about-description">
                <p>
                  For over a decade, we’ve proudly served as a premium destination for BMW enthusiasts and drivers
                   across the United States. Whether you're looking for dynamic performance, sophisticated design, 
                   or innovative technology, we offer BMW models that suit every need — from business travel to spirited weekend drives.
                </p>
                <p>
                  With multiple pickup and return locations across New York, our services 
                  are designed to provide seamless convenience and flexibility. Our commitment is 
                  to deliver the ultimate driving experience through a trusted, customer-focused rental service. 
                  At BMW FASTCAR, excellence isn't just a promise — it's the standard.
                </p>
              </div>
              <button className="contact-btn">CONTACT US</button>
            </div>
            
            <div className="about-image">
              <div className="car-container">
                {/* Using a placeholder BMW i3 image - replace with your actual car image */}
                <img 
                  src= {images1} 
                  alt="BMW Car" 
                  className="car-image"
                />
                {/* Decorative elements */}
                <div className="image-decorations">
                  <div className="decoration-circle circle-1"></div>
                  <div className="decoration-circle circle-2"></div>
                  <div className="decoration-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="about-section">
        <div className="about-card">
          <img src={image1} alt="The New M2 CS" className="about-image" />
          <div className="about-text">
            <h4>Accelerate Your Senses.</h4>
            <h2>THE NEW M2 CS</h2>
          </div>
        </div>

        <div className="about-card">
          <img src={image2} alt="Performance Meets Panorama" className="about-image" />
          <div className="about-text">
            <h4>An exclusive panoramic drive to Kitzbühel.</h4>
            <h2>PERFORMANCE MEETS PANORAMA.</h2>
          </div>
        </div>
      </section> */}


      <section className="strategy-section">
      <div className="strategy-content">
        <h2 className="strategy-title">STRATEGY.</h2>
        <p className="strategy-text">
          At the BMW Group, we know we have a responsibility to society and the world. That’s why we have fixed targets
          and values that govern the way we do business. With the help of our strategic focus, we want to make a meaningful
          contribution to a more sustainable world and combine top-flight mobility with innovative technologies.
        </p>
        <a href="#" className="strategy-link">› More</a>
      </div>
      <div className="strategy-image">
        <img src={image3} alt="BMW Strategy" />
      </div>
    </section>



       {/* BRANDS & SERVICES Section */}
      <section className="brands-section">
        <div className="brands-image">
          <img src={image4} alt="BMW Brands and Services" />
        </div>
        <div className="brands-content">
          <h2 className="brands-title">BRANDS & SERVICES.</h2>
          <p className="brands-text">
            The BMW Group is the world’s leading provider of premium cars and motorcycles and the home of the BMW, MINI, 
            Rolls-Royce and BMW Motorrad brands. Our vehicles and products are tailored to the needs of our customers and 
            constantly enhanced – with a clear focus on sustainability and the conservation of resources.
          </p>
          <a href="#" className="brands-link">› More</a>
        </div>
      </section>


        {/* LEADERSHIP & GOVERNANCE Section */}
      <section className="leadership-section">
        <div className="leadership-image">
          <img src={image5} alt="BMW Leadership Governance" />
        </div>
        <div className="leadership-content">
          <h2 className="leadership-title">LEADERSHIP & GOVERNANCE.</h2>
          <p className="leadership-text">
            At the BMW Group, corporate governance is not just a job, it’s our mission. Our Management and Supervisory 
            Boards work closely together, with a strong sense of responsibility and trust which underpins the actions of our 
            company. Transparent reporting and leadership guided by stakeholder interests have always been among the core 
            values that govern how we do business.
          </p>
          <a href="#" className="leadership-btn">MORE <span className="arrow">›</span></a>
        </div>
      </section>



          <section className="numbers-section">
        <div className="numbers-header">
          <h2>THE BMW GROUP IN NUMBERS.</h2>
          <p>
            As a multinational, the BMW Group operates in a wide variety of fields and offers a broad portfolio of products and services.
            To ensure full transparency and compliance, we regularly publish reports and compile our KPIs – from headcount and exact annual 
            revenues to investments and R&D quotas. That way, our customers, partners and investors are always up to date with what’s going on in our organisation.
          </p>
        </div>

        <div className="numbers-content">
          <div className="numbers-card">
            <h4>REVENUES</h4>
            <p className="big-number">€142.4 bn</p>
            <p className="subtext">in 2024</p>
          </div>

          <div className="numbers-image">
            <img src={image6} alt="BMW car numbers" />
          </div>

          <div className="numbers-card">
            <h4>VEHICLES</h4>
            <p className="big-number">2.45 m</p>
            <p className="subtext">cars sold in 2024.</p>
          </div>
        </div>
      </section>


           
           <div className="about">
      <div className="about-image">
        <img src={image7} alt="Worldwide Markets" />
      </div>
      <div className="about-text">
        <h4>WORLDWIDE</h4>
        <h1>140 MARKETS</h1>
        <p>sell our cars.</p>
      </div>
    </div>

 
         
          <div className="about about-reverse">
      <div className="about-text">
        <h4>HEADCOUNT</h4>
        <h1>159,104 EMPLOYEES</h1>
        <p>work for the BMW Group (as at the end of 2024).</p>
      </div>
      <div className="about-image">
        <img src={image8} alt="BMW Employees" />
      </div>
    </div>
       
     


    </>
  );
};

export default About;