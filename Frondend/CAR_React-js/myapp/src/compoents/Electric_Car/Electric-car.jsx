import React from 'react';
import { useState } from 'react';
import './Electric-car.css';
import Image from '../Asserts/electric-carimg1.jpg';// Update path if needed
import image from '../Asserts/electric-carimg2.jpg';
import image1 from '../Asserts/electric-carimg3.jpg';
import image2 from '../Asserts/electric-carimg4.jpg';
import image3 from '../Asserts/electric-carimg5.jpg';
import image4 from '../Asserts/electric-carimg6.jpg';
import image5 from '../Asserts/electric-carimg7.jpg';
import image6 from '../Asserts/electric-carimg8.jpg';
import image7 from '../Asserts/electric-carimg9.png';

import ix1 from '../Asserts/electric-carimg8.jpg';
import ix from '../Asserts/electric-carimg7.jpg';
import i4 from '../Asserts/electric-carimg6.jpg';
import i7 from '../Asserts/electric-carimg5.jpg';
import i5 from '../Asserts/electric-carimg4.jpg';

const models = [
  { name: 'THE iX1 LWB.', image: ix1, info: ['Up to 531 km range', 'Recharge 10 min = 120 km', '15.5 kWh/100km'] },
  { name: 'THE iX', image: ix, info: ['Up to 620 km range', 'Recharge 10 min = 150 km', '19.0 kWh/100km'] },
  { name: 'THE i4.', image: i4, info: ['Up to 590 km range', 'Recharge 10 min = 140 km', '16.1 kWh/100km'] },
  { name: 'THE i7.', image: i7, info: ['Up to 625 km range', 'Recharge 10 min = 170 km', '18.4 kWh/100km'] },
  { name: 'THE i5.', image: i5, info: ['Up to 582 km range', 'Recharge 10 min = 135 km', '17.2 kWh/100km'] },
];


function Electric() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedModel = models[selectedIndex];



return (
  <>
    <div className="electric-first">
      <img src={Image} alt="BMW Electric Cars" className="electric-background" />
      <div className="electric-overlay">
        <h1 className="electric-title">BMW ELECTRIC CARS</h1>
        <button className="electric-btn">Book a Test Drive</button>
      </div>
    </div>

    {/* ///////////////////// */}
             
    <div className="electric-info">
      <h2 className="electric-info-heading">THE BMW ELECTRIC CARS.</h2>
      <p className="electric-info-subheading">
        100 % electric. 100 % driving pleasure. 100 % BMW.
      </p>
      <p className="electric-info-description">
        Experience an entirely new sensation of sheer driving pleasure. After all, nothing compares
        with the feeling of gliding almost silently through urban or rural traffic, the instant response
        of the electric engine and unique acceleration from stand-still. And all of this is free of
        exhaust fumes and local emissions. Join us to explore the world of BMW electric cars.
      </p>
    </div>


    {/* /////////////////////// */}




    <div className="electric-driving-section">
  <h2 className="electric-driving-title">EXPERIENCE THE JOY OF ELECTRIC DRIVING</h2>

  {/* Video preview (static image with play button) */}
  <div className="video-thumbnail-wrapper">
    <a href="https://youtu.be/OVm4NNqfh7c?t=5" target="_blank" rel="noopener noreferrer">
      <img src={image} alt="Driving video preview" className="video-thumbnail" />
      <div className="play-button">&#9658;</div>
    </a>
  </div>
</div>

     {/* //////////////////////////// */}

   <div className="born-electric-section">
  <h2 className="born-electric-heading">BORN-ELECTRIC</h2>
  <div className="born-electric-content">
    <div className="born-electric-image">
      <img src={image1} alt="BMW i5" />
    </div>
    <div className="born-electric-text">
      <h3>THE BMW i5</h3>
      <p>
        Drive into a world where the ingenuity of BMW i and the power of BMW M connect.
        Introducing the first-ever BMW i5 M60, a 100% electric marvel that isn't just a car,
        but an experience engineered for unbridled excitement and unparalleled thrills.
        With sleek design and uncompromising performance, this executive sedan personifies
        exhilaration in the new age. Embark on your electrifying journey where every turn
        of the wheel becomes an odyssey of pure JOY.
      </p>
      <a href="#" className="bmw-button">Know more about the BMW i5 M60</a>
    </div>
  </div>
</div>

{/* ///////////////////////// */}

    <div className="bmw-ix-section">
  <div className="bmw-ix-content">
    <div className="bmw-ix-text">
      <h3>THE BMW iX</h3>
      <p>
        The all-electric BMW iX xDrive50 is a first of its kind in a future-oriented generation of automobiles.
        With fully-electric driving pleasure and newly-developed, precise and minimalist monolithic design,
        the all-electric BMW iX xDrive50 is a vision turned into reality. Discover the emblem of new era of
        mobility and electrify your sheer driving pleasure.
      </p>
      <a href="#" className="bmw-button">Know more about the BMW iX</a>
    </div>
    <div className="bmw-ix-image">
      <img src={image2} alt="BMW iX xDrive50" />
    </div>
  </div>
</div>
          

          {/* ////////////////////////// */}


        <div className="bmw-i4-section">
  <div className="bmw-i4-content">
    <div className="bmw-i4-image">
      <img src={image3} alt="BMW i4" />
    </div>
    <div className="bmw-i4-text">
      <h3>THE BMW i4</h3>
      <p>
        The first-ever fully-electric BMW i4 delivers outstanding dynamics with a high level of comfort and the ideal
        qualities to make it your daily driver. The five-door model comes equipped with fifth-generation BMW eDrive
        technology for sporty performance figures. With a long range of up to 483 kilometres* and five spacious
        full-sized seats, it is the perfect companion for any journey.
      </p>
      <a href="#" className="bmw-button">Know more about the BMW i4</a>
    </div>
  </div>
</div>


      {/* ///////////////////
   */}


       <div className="bmw-i7-section">
  <div className="bmw-i7-content">
    <div className="bmw-i7-text">
      <h3>THE BMW i7</h3>
      <p>
        The first-ever fully electric BMW i7 combines electric performance and multisensory entertainment to produce an unforgettable motoring experience.
      </p>
      <a href="#" className="bmw-button">Know more about the BMW i7</a>
    </div>
    <div className="bmw-i7-image">
      <img src={image4} alt="BMW i7" />
    </div>
  </div>
</div>

  
      {/* ///////////////////////////////// */}

      
       <div className="bmw-ix1-section">
  <div className="bmw-ix1-content">
    <div className="bmw-ix1-image">
      <img src={image5} alt="BMW iX1 LWB" />
    </div>
    <div className="bmw-ix1-text">
      <h3>THE BMW iX1 LWB</h3>
      <p>
        Introducing the BMW iX1 Long Wheelbase. Step up to this grand, all-electric family experience, that is the most dominant in its segment.
        A versatile wonder, it is packed with new age features that let you stay connected in comfort.
        Engineered to uplift every journey, every day, as you cruise through an active life.
      </p>
      <a href="#" className="bmw-button">Know more about the BMW iX1 LWB</a>
    </div>
  </div>
</div>


{/* ///////////////////////////////// */}


    <div className="joy-driving-section">
  <div className="joy-driving-content">
    <div className="joy-driving-text">
      <h3>The Joy Of Electric Driving</h3>
      <ul>
        <li>Completely new, emotionally charged driving experience</li>
        <li>Smooth acceleration from a standing start</li>
        <li>
          Electrifying dynamics with a relaxed driving sensation – gliding
          almost silently
        </li>
      </ul>
    </div>
    <div className="joy-driving-image">
      <img src={image6} alt="BMW Joy of Electric Driving" />
    </div>
  </div>
</div>
 
{/* ////////////////////// */}



      <div className="lifestyle-section">
  <div className="lifestyle-content">
    <div className="lifestyle-image">
      <img src={image7} alt="BMW Electric Lifestyle" />
    </div>
    <div className="lifestyle-text">
      <h3>WHY A BMW ELECTRIC CAR SUITS<br />YOUR LIFESTYLE PERFECTLY.</h3>
      <ul>
        <li>Emission-free sheer driving pleasure</li>
        <li>Optimal everyday utility due to high ranges</li>
        <li>
          Long journeys become even more convenient – thanks to the constant
          growth in charging infrastructure
        </li>
      </ul>
    </div>
  </div>
</div>

{/* ///////////////////////// */}

            <div className="electric-container">
      <h2>FIND YOUR BMW ELECTRIC CAR.</h2>

      <div className="electric-content">
        <div className="model-details">
          <h3>{selectedModel.name}</h3>
          <ul>
            {selectedModel.info.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="image-and-menu">
          <img
            key={selectedModel.image}
            src={selectedModel.image}
            alt={selectedModel.name}
            className="bmw-image"
          />

          <div className="model-menu">
            {models.map((model, idx) => (
              <p
                key={idx}
                className={selectedIndex === idx ? 'active' : ''}
                onClick={() => setSelectedIndex(idx)}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                {model.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
         



         {/* /////////////////////////// */}

   
    <div className="emissions-container">
      <h2>Electric consumption and CO<sub>2</sub> emissions.</h2>

      <p className="emissions-note">* Values are preliminary; measured according to the WLTP test cycle</p>
      <p className="emissions-note">** Market-specific offer valid for new vehicles from BMW authorized dealerships in India.</p>

      <div className="emission-block">
        <h4>BMW iX1 LWB*</h4>
        <p>Power Consumption per 100km (MIDC, kWh): <strong>15.5</strong></p>
        <p>CO₂ emissions in g/km: <strong>0</strong></p>
      </div>

      <div className="emission-block">
        <h4>BMW i4 eDrive35(1)</h4>
        <p>Power consumption in kWh/100 km: <strong>18.7 – 15.8</strong></p>
        <p>CO₂ emissions in g/km: <strong>0</strong></p>
      </div>

      <div className="emission-block">
        <h4>BMW iX xDrive50(1)</h4>
        <p>Power consumption in kWh/100 km: <strong>20.7 – 18.7</strong></p>
        <p>CO₂ emissions in g/km: <strong>0</strong></p>
      </div>

      <div className="emission-block">
        <h4>BMW i7 eDrive50*</h4>
        <p>Power consumption in kWh/100 km (combined, WLTP): <strong>22.14</strong></p>
        <p>CO₂ emissions in g/km: <strong>0</strong></p>
      </div>

      <div className="emission-block">
        <h4>BMW i5 M60 xDrive*</h4>
        <p>Power consumption in kWh/100 km (combined, WLTP): <strong>20.6 – 18.2</strong></p>
        <p>CO₂ emissions in g/km: <strong>0</strong></p>
      </div>

      <p className="emissions-note last">
        ***The model, equipment and possible vehicle configurations illustrated in the advertisement may differ from the vehicle supplied in the India market.
      </p>
    </div>




  </>
);
}

export default Electric;
