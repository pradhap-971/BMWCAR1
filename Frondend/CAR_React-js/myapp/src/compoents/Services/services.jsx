import React from 'react';
import './services.css';
import serviceVideo from '../Asserts/car3-viodes.mp4'; 
import appointmentImage from '../Asserts/car3.avif';
import images1 from '../Asserts/servicesimg1.jpg';
import images2 from '../Asserts/servicesimg3.jpg';
import images3 from '../Asserts/serviceimg4.png';

const Services = () => {

         
 





  return (
    <>
      <div className="services-container">
        <h1>WELCOME TO THE WORLD OF BMW SERVICE.</h1>
        <p className="subtext">FOR YOUR SHEER DRIVING PLEASURE.</p>

        <div className="video-thumbnail">
          <video className="service-video" autoPlay loop muted playsInline>
            <source src={serviceVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="info-section">
        <div className="info-image">
          <img src={appointmentImage} alt="BMW Appointment" />
        </div>
        <div className="info-content">
          <h2>ONLINE APPOINTMENT SYSTEM</h2>
          <p>
            Easily schedule your BMW service from anywhere, at any time, and at any authorised BMW dealership.
            Enjoy the complete freedom of choosing your date and time, desired service and even your preferred staff member.
            You also have the option to modify the appointment later and booking an online appointment without registering.
          </p>
          <button className="know-more-btn">Know More</button>
        </div>
      </div>

      <div className="info-section reverse">
        <div className="info-content">
          <h2>JOY REWARDS</h2>
          <p>
            When you are part of the family of one of the world’s leading automotive brands, it has its benefits.
            With regular savings on service and maintenance, enjoy rewards with every passing year of ownership.
            Not only do you save up to 30% on the service of models older than five years, you also get genuine
            BMW service by authorised dealers that increases the longevity of the vehicle.
          </p>
          <button className="know-more-btn">Know More</button>
        </div>
        <div className="info-image">
          <img src={images1} alt="Joy Rewards BMW" />
        </div>
      </div>

      <div className="info-section">
        <div className="info-image">
          <img src={images2} alt="Smart Video BMW" />
        </div>
        <div className="info-content">
          <h2>SMART VIDEO</h2>
          <p>
            We ensure transparency meets personalisation when it comes to serving your BMW. To simplify the technical aspects
            of the service of your BMW, we send you a video that explains the service or repair requirements straight to your device.
            You can then review it and give approvals online from the comfort of your home.
          </p>
          <button className="know-more-btn">Know More</button>
        </div>
      </div>

      <div className="info-section reverse">
        <div className="info-content">
          <h2>ORIGINAL BMW ENGINE OIL</h2>
          <p>
            Unleash the full potential of your BMW by protecting it with the Original BMW Engine Oils that are
            optimised to perfectly suit the engine of your BMW. They contribute to full power delivery with high
            efficiency as they help to protect the engine against wear and corrosion. This helps to keep the engine
            clean and to increase its service life. Sheer Driving Pleasure is always yours when you give your BMW the best.
          </p>
          <button className="know-more-btn">Know More</button>
        </div>
        <div className="info-image">
          <img src={images3} alt="BMW Engine Oil Service" />
        </div>
      </div>




      
    </>
  );
};

export default Services;
