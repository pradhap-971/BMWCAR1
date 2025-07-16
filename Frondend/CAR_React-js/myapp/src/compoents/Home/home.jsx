// Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import './home.css';
import carImage1 from '../Asserts/car1.jpg';
import carImage2 from '../Asserts/car2.jpg';
import carImage3 from '../Asserts/car3.avif';
import viodes1 from '../Asserts/car-vidoes1.mp4';
import viodes2 from '../Asserts/car-vidoes2.mp4';
import image1 from '../Asserts/homeimg1.webp';
import viodes3 from '../Asserts/homeviodes1.mp4';
import viodes4 from '../Asserts/homeviodes22.mp4';
import image9 from '../Asserts/homeimg9.jpeg';
import image2 from '../Asserts/homeimg2.avif';
import image3 from '../Asserts/homeimg3.avif';
import image4 from '../Asserts/homeimg4.avif';
import image5 from '../Asserts/homeimg5.avif';
import image10 from '../Asserts/homeimg10.webp';
import image11 from '../Asserts/homeimg11.webp';
import image12 from '../Asserts/homeimg12.webp';
import image13 from '../Asserts/homeimg13.webp';
import { FaSyncAlt, FaTachometerAlt, FaDollarSign, FaEnvelope } from 'react-icons/fa';





const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);

  const slides = [
    {
      type: 'image',
      src: carImage1,
      alt: "BMW X1",
      title: "THE BMW X1",
      subtitle: "XCEED",
      features: [
        "Drive home at a special EMI of ₹38,422*",
        "Starting at ₹50.80 Lakh.",
        "Flexible down payment & assured buyback with smart finance plan.",
        "Additional benefits worth ₹1.5 Lakh*"
      ]
    },
    {
      type: 'video',
      src: viodes1,
      alt: "BMW X1 Video",
      title: "PERFORMANCE",
      subtitle: "UNLEASHED",
      features: [
        "0-100 km/h in 6.8 seconds",
        "TwinPower Turbo technology",
        "Sport-tuned suspension",
        "Dynamic Stability Control"
      ]
    },
    {
      type: 'image',
      src: carImage2,
      alt: "BMW X1 Interior",
      title: "LUXURY INTERIOR",
      subtitle: "REIMAGINED",
      features: [
        "Vernasca leather upholstery",
        "Panoramic glass sunroof",
        "Ambient lighting with 6 color options",
        "10.25-inch touchscreen display"
      ]
    },
    {
      type: 'video',
      src: viodes2,
      alt: "BMW Night Drive",
      title: "ADVANCED LIGHTING",
      subtitle: "ICONIC DESIGN",
      features: [
        "Adaptive LED headlights",
        "Cornering lights",
        "Automatic high beam",
        "BMW Iconic Glow kidney grille"
      ]
    },
    {
      type: 'image',
      src: carImage3,
      alt: "BMW X1 Dashboard",
      title: "DIGITAL COCKPIT",
      subtitle: "FUTURE TECHNOLOGY",
      features: [
        "Digital instrument cluster",
        "Head-up display",
        "Gesture control",
        "Wireless Apple CarPlay & Android Auto"
      ]
    }
  ];

  useEffect(() => {
    videoRefs.current.forEach(video => video && video.pause());
    if (slides[currentSlide].type === 'video') {
      const video = videoRefs.current[currentSlide];
      video && video.play().catch(err => console.log("Autoplay blocked", err));
    }
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  const goToSlide = index => setCurrentSlide(index);



  const models = [
    { name: '3 Series Sedan', img: image10 },
    { name: 'X3', img: image11 },
    { name: '5 Series Sedan', img: image12 },
    { name: 'X5', img: image13 },
  ];



   const ownershipOptions = [
  {
    icon: <FaSyncAlt size={40} color="#0071eb" />,
    title: 'Trade-In Value',
    description: 'Get the latest information on your vehicle’s trade-in value today.',
    linkText: 'Visit Black Book',
    href: '#',
  },
  {
    icon: <FaTachometerAlt size={40} color="#0071eb" />,
    title: 'Check Your Credit Score',
    description: 'See where you stand on your journey to owning a BMW.',
    linkText: 'Visit Equifax',
    href: '#',
  },
  {
    icon: <FaDollarSign size={40} color="#0071eb" />,
    title: 'Apply for Financing',
    description: 'Own the BMW of your dreams with BMW Financial Services.',
    linkText: 'Get Started',
    href: '#',
  },
  {
    icon: <FaEnvelope size={40} color="#0071eb" />,
    title: 'Stay Connected',
    description: 'Receive the latest offers, releases, and news from BMW.',
    linkText: 'Sign Up Now',
    href: '#',
  },
];


  return (
    <>

    
      <section className="hero-section">
        {slides.map((slide, index) => (
          <div key={index} className={`slide-background ${index === currentSlide ? 'active' : ''}`}>
            {slide.type === 'image' ? (
              <img src={slide.src} alt={slide.alt} className="background-media" />
            ) : (
              <video
                ref={el => videoRefs.current[index] = el}
                src={slide.src}
                className="background-media"
                muted loop playsInline
              />
            )}
          </div>
        ))}

        <div className="hero-overlay">
          <div className="hero-content">
            <h1>{slides[currentSlide].title}<br />{slides[currentSlide].subtitle}</h1>
            <ul>
              {slides[currentSlide].features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <button className="hero-btn">Book an Experience</button>
          </div>

          <button className="nav-arrow left" onClick={prevSlide}>&#10094;</button>
          <button className="nav-arrow right" onClick={nextSlide}>&#10095;</button>

          <div className="dots-indicator">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <div className="home-container">
        <div className="home-left">
          <h1>DESIGN YOUR<br />ULTIMATE DRIVING<br />MACHINE.™</h1>
          <button className="select-series">Select a Series ⌄</button>
          <p className="disclaimer">
            This is a configurator. While we strive to provide accurate configuration options, not every configuration can be guaranteed. Please visit your local BMW dealer for additional information about your chosen BMW.
          </p>
        </div>

        <div className="home-right">
          <img src={image1} alt="BMW Car" className="car-image" />
          <div className="build-info">
            <div>
              <strong>A popular build for you.</strong>
              <p>X3 30 xDrive • Optional equipment included • $56,350 MSRP as built</p>
            </div>
            <button className="build-btn">Build This Vehicle</button>
          </div>
        </div>
      </div>

        


        <section className="heart-of-joy-section">
      <div className="heart-of-joy-content">
        <p className="subtitle">Inside Neue Klasse</p>
        <h1 className="title">
          THE HEART OF JOY – <br />
          REDEFINING DRIVING <br />
          PLEASURE
        </h1>
        <button className="read-more-btn">Read more</button>
      </div>
      <div className="heart-of-joy-image">
        <img src={carImage1} alt="Heart of Joy BMW" />
      </div>
    </section>


         
          {/* <section className="bmw-expert-section">
      <div className="bmw-expert-image">
        <img src={viodes1} alt="BMW Logos" />
      </div>
      <div className="bmw-expert-content">
        <h2>BECOME A BMW EXPERT</h2>
        <p className="bmw-link">
          <span className="arrow">›</span> <strong>BMW EXPLAINED</strong>
        </p>
      </div>
    </section> */}

               {/* ///// */}

                   <section className="bmw-models-section">
      <div className="bmw-card" style={{ backgroundImage: `url(${image2})` }}>
        <div className="card-overlay">
          <p className="model-title">THE 2026 BMW iX</p>
          <h2 className="model-heading">AN ELECTRIC FUTURE</h2>
          <a href="#" className="learn-more">Learn More</a>
        </div>
      </div>

      <div className="bmw-card" style={{ backgroundImage: `url(${image3})` }}>
        <div className="card-overlay">
          <p className="model-title">THE 2026 BMW X5</p>
          <h2 className="model-heading">LEAD WITH CONFIDENCE</h2>
          <a href="#" className="learn-more">Learn More</a>
        </div>
      </div>
    </section>

                  {/* /////////// */}

          
            <section className="bmw-models-section">
      <div className="bmw-card" style={{ backgroundImage: `url(${image4})` }}>
        <div className="card-overlay">
          <p className="model-title">THE 2026 BMW X7</p>
          <h2 className="model-heading">NEXT-LEVEL LUXURY</h2>
          <a href="#" className="learn-more">Learn More</a>
        </div>
      </div>

      <div className="bmw-card" style={{ backgroundImage: `url(${image5})` }}>
        <div className="card-overlay">
          <p className="model-title">2025 CONSUMER REPORTS</p>
          <h2 className="model-heading">BMW WINS BEST LUXURY BRAND</h2>
          <a href="#" className="learn-more">Learn More</a>
        </div>
      </div>
    </section>
  

         {/* ////// */}


{/* 
         <section className="bmw-builder-section">
      <h2>Build the BMW of your dreams.</h2>
      <div className="bmw-builder-cars">
        {models.map((model, index) => (
          <div key={index} className="bmw-model">
            <img src={model.img} alt={model.name} />
            <p>{model.name}</p>
            <a href="#" className="start-designing">Start Designing</a>
          </div>
        ))}
      </div>
      <button className="build-own-btn">Build Your Own</button>
    </section> */}

                   {/* /////// */}


                    <section className="ownership-section">
      <h2>Ownership starts here.</h2>
      <div className="ownership-grid">
        {ownershipOptions.map((item, index) => (
          <div className="ownership-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.href}>{item.linkText} ↗</a>
          </div>
        ))}
      </div>
    </section>









    </>
  );
};

export default Home;
