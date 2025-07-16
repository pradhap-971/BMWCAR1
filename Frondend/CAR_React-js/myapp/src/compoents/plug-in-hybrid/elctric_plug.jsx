import React from 'react';
import './electric_plug.css';
import image1 from '../Asserts/plugimg1.webp';
import image2 from '../Asserts/plugimg2.webp';
import image3 from '../Asserts/plugimg3.webp';
import image4 from '../Asserts/plugimg4.webp';
import image5 from '../Asserts/plugimg5.webp';
import image6 from '../Asserts/plugimg6.webp';
import image7 from '../Asserts/plugimg7.avif';
import image8 from '../Asserts/plugimg8.avif';
import image9 from '../Asserts/plugimg9.avif';
import logo from '../Asserts/pluglogo.avif';
import image10 from '../Asserts/plugimg10.avif';
import image11 from '../Asserts/plugimg11.avif';
import image12 from '../Asserts/plugimg12.avif';
import logo1 from '../Asserts/pluglogo1.avif';



const ElectricPlug = () => {
  const vehicles = [
    {
      name: "The X5",
      price: "$73,800",
      image: image1,
      learnMoreLink: "#",
      buildLink: "#"
    },

    {
      name: "The 5",
      price: "$73,400",
      image: image2,
      learnMoreLink: "#",
      buildLink: "#"
    },

    {
      name: "The 7",
      price: "$108,000",
      image: image3,
      learnMoreLink: "#",
      buildLink: "#"
    },

    {
      name: "The M5 Sedan",
      price: "$119,500",
      image: image4,
      learnMoreLink: "#",
      buildLink: "#"
    },

    {
      name: "The M5 Touring",
      price: "$121,500",
      image: image5,
      learnMoreLink: "#",
      buildLink: "#"
    },

    

  ];

    // <></>


    const features = [
    {
      title: "Accessible charging",
      description: "Charge when and where you want – overnight or on-the-go.",
      icon: "⚡"
    },
    {
      title: "Intelligent drive modes",
      description: "Optimize power usage on every drive with intuitive drive modes.",
      icon: "🚗"
    },
    {
      title: "Everyday fuel efficiency",
      description: "Save time and money with fewer trips to the gas station. 😊",
      icon: "⛽"
    }
  ];

  //  <></>

  const features1 = [
    {
      title: "A digital link",
      description: "Stay connected to your plug-in hybrid at all times with your My BMW App where you can manage charging status, locate charging stations, monitor your electrical consumption, and more right from your phone.",
      icon: "📱"
    },
    {
      title: "Electric by design",
      description: "View information like charge status, full-electric or combined driving ranges,electric motor output, and more in an exclusive style with the hybrid-specific Digital Instrument Cluster.",
      icon: "🔋"
    }
  ];


  /// <></>


  

  return (
    <>
      <div className="plug-showcase">
        <header className="showcase-header">
          <h1>BMW PLUG-IN HYBRID VEHICLES</h1>
        </header>

        <div className="vehicles-container">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="vehicle-card">
              <div className="vehicle-image-container">
                <img 
                  src={vehicle.image} 
                  alt={`BMW ${vehicle.name} Plug-in Hybrid`}
                  className="vehicle-image"
                  loading="lazy"
                />
              </div>
              
              <div className="vehicle-details">
                <h2 className="vehicle-name">{vehicle.name}</h2>
                <p className="vehicle-price">STARTING MSRP<br/>{vehicle.price}</p>
                
                <div className="vehicle-actions">
                  <a href={vehicle.learnMoreLink} className="action-button learn-more">
                    Learn More
                  </a>
                  <a href={vehicle.buildLink} className="action-button build-own">
                    Build Your Own
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

         {/* ////////////////// */}
      <section className="lifestyle-section">
        <div className="lifestyle-content">
          <div className="text-content">
            <span className="section-label">LIFESTYLE</span>
            <h2 className="section-title">THE PLUG-IN HYBRID WITH MORE</h2>
            <p className="section-description">
              Elevate every journey with the excitement of electrified driving. By combining an integrated electric motor 
              with the BMW TwinPower Turbo engine, you can experience the gratification of all-electric driving for local 
              trips, and increased efficiency on all your drives.
            </p>
          </div>
          <div className="image-content">
            <img 
              src= {image7} 
              alt="BMW Plug-in Hybrid Lifestyle"
              className="lifestyle-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

              {/* /////////////////////// */}

              <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>


       {/* /////////////////////////// */}

        <section className="digital-features-section">
      <div className="section-header">
        <h2 className="section-title">The cutting-edge advantage.</h2>
      </div>
      
      <div className="features-grid">
        {features1.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon-container">
              <span className="feature-icon">{feature.icon}</span>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

       {/* ////////////////////////// */}

            <section className="charging-section">
      <div className="charging-container">
        <div className="charging-content">
          <h2 className="charging-title">
            BMW Charging
            <span className="charging-icon">⚡</span>
          </h2>
          
          <p className="charging-description">
            Operate at peak performance and enhance the efficiency of your plug-in hybrid with BMW Charging: 
            the advanced, comprehensive charging program that offers tailored solutions for both home and public 
            charging.
          </p>
          
          <div className="charging-cta">
            <button className="cta-button primary">
              Learn About Home Charging
            </button>
            <button className="cta-button secondary">
              Find Public Chargers
            </button>
          </div>
        </div>
        
        <div className="charging-image">
          <img 
            src= {logo} 
            alt="BMW Charging Station" 
            loading="lazy"
          />
        </div>
      </div>
    </section>
        
         
         {/* ////////////////// */}

         <div className="electric-container1">
      <div className="charging-section1">
        <div className="charging-box1">
          <img src={image10} alt="Flexible Charger1" />
          <h4>Convenient charging anywhere.</h4>
          <p>
            Every BMW plug-in hybrid comes equipped with the Flexible Fast Charger.
            This portable device uses a standard outlet for convenient at-home charging.
            This portable device includes a NEMA 5-15 adapter for charging at any 120V outlet.
             Adapters for charging at a 240V outlet can be purchased at your BMW Center.
          </p>
        </div>
        <div className="charging-box1">
          <img src={image11} alt="BMW Wallbox1" />
          <h4>Optimized charging at home.</h4>
          <p>
            Install a BMW Wallbox in your home for fast charging between daily drives. 
            The Wallbox can be installed in your garage or outdoors and delivers Level 2 
            charging at the maximum charging power of 7.4 kW.

          </p>
        </div>
        <div className="charging-box1">
          <img src={image12} alt="Public Charger1" />
          <h4>Enjoy nationwide public charging.</h4>
          <p>
            Charge with ease by accessing Level 2 chargers on the go, 
            which you can quickly locate in your vehicle navigation or My BMW app. 
            And with the BMW TwinPower Turbo engine, you can be assured that your plug-in
             hybrid has the range to get you where you want to go.
          </p>
        </div>
      </div>
    </div>




                   {/* ///////////////////// */}

                   <section className="chargeforward-section">
      <div className="chargeforward-container">
        <div className="chargeforward-content">
          <h2 className="chargeforward-title">
            Charge smarter with <span className="highlight">ChargeForward</span>.
          </h2>
          
          <p className="chargeforward-description">
            Incentives for you. Lower carbon emissions for charging. And a more balanced energy grid for everyone. 
            BMW's unique ChargeForward service optimizes the best time to charge your vehicle when carbon emissions 
            are lower in your local energy grid. All BMW EVs and PHEVs from model years 2018 and on are eligible - 
            simply enroll using your BMW ID on the ChargeForward website or the My BMW App, set your departure time, 
            and plug in.
          </p>
          
          <div className="chargeforward-features">
            <div className="feature">
              <div className="feature-icon">🌱</div>
              <span>Lower carbon emissions</span>
            </div>
            <div className="feature">
              <div className="feature-icon">💰</div>
              <span>Potential incentives</span>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <span>Grid optimization</span>
            </div>
          </div>
          
          <a href="#" className="learn-more-link">
            Learn more <span className="arrow">→</span>
          </a>
        </div>
        
        <div className="chargeforward-visual">
          <div className="visual-container">
            <img 
              src= {logo1}
              alt="ChargeForward App" 
              className="app-image"
              loading="lazy"
            />
            <div className="visual-overlay"></div>
          </div>
        </div>
      </div>
    </section>




                       
    </>
  );
};

export default ElectricPlug;