import React, { useState } from 'react';
import './models.css';

const cars = [
  {
    id: 1,
    name: 'BMW M5',
    type: 'Petrol',
    Engine :'4395 cc',
    Power : '717 bhp',
    Torque: '1000 Nm',
    Mileage: '49.75 kmpl',
    price: 'Price ₹ 1.99 Cr',
    image: require('../Asserts/modelimg1.webp'),
    bigImage: require('../Asserts/modelimg1.webp'),
  },
  {
    id: 2,
    name: 'BMW X1',
    type: 'Petrol',
    Engine :'1499 cc - 1995 cc',
    Power : '134.1 - 147.51 bhp',
    Torque: '230 Nm - 360 Nm',
    Mileage: '20.37 kmpl',
    price: 'Price ₹50.80 - 53.80 Lakh',
    image: require('../Asserts/modelimg2.avif'),
    bigImage: require('../Asserts/modelimg2.avif'),
  },

   {
    id: 3,
    name: 'BMW X5',
    type: 'Petrol/Diesel',
    Engine :'2993 cc - 2998 cc',
    Power : '281.68 - 375.48 bhp',
    Torque: '520 Nm - 650 Nm',
    Mileage: '25.37 kmpl',
    price: 'Price ₹96 Lakh - 1.09 Cr',
    image: require('../Asserts/modelimg3.avif'),
    bigImage: require('../Asserts/modelimg3.avif'),
  },

  {
    id: 4,
    name: 'BMW X7',
    type: 'Petrol/Diesel',
    Engine :'2993 cc - 2998 cc',
    Power : '335.25 - 375.48 bhp',
    Torque: '520 Nm - 700 Nm',
    Mileage: '28.37 kmpl',
    price: 'Price ₹1.29 - 1.33 Cr',
    image: require('../Asserts/modelimg4.avif'),
    bigImage: require('../Asserts/modelimg4.avif'),
  },

  {
    id: 5,
    name: 'BMW X3',
    type: 'Petrol/Diesel',
    Engine :'1995 cc - 1998 cc',
    Power : '187 - 194 bhp',
    Torque: '310 Nm - 400 Nm',
    Mileage: '13.38 - 17.86 kmpl',
    price: 'Price ₹75.80 - 77.80 Lakh',
    image: require('../Asserts/modelimg5.avif'),
    bigImage: require('../Asserts/modelimg5.avif'),
  },
  
  {
    id: 6,
    name: 'BMW Z4',
    type: 'Petrol/Diesel',
    Engine :'2998 cc',
    Power : '335 bhp',
    Torque: '500 Nm',
    Mileage: '17.86 kmpl',
    price: 'Price ₹92.90 - 97.90 Lakh',
    image: require('../Asserts/modelimg6.avif'),
    bigImage: require('../Asserts/modelimg6.avif'),
  },

   {
    id: 7,
    name: 'BMW M8 Coupe Competition',
    type: 'Petrol',
    Engine :'4395 cc',
    Power : '616.87 bhp',
    Torque: '450 Nm',
    Mileage: '8.7 kmpl',
    price: 'Price ₹2.44 Cr',
    image: require('../Asserts/modelimg7.avif'),
    bigImage: require('../Asserts/modelimg7.avif'),
  },

  {
    id: 8,
    name: 'BMW 5 Series',
    type: 'Petrol',
    Engine :'1998 cc',
    Power : '255 bhp',
    Torque: '400 Nm',
    Mileage: '10.9 kmpl',
    price: 'Price ₹2.44 Cr',
    image: require('../Asserts/modelimg8.avif'),
    bigImage: require('../Asserts/modelimg8.avif'),
  },

  {
    id: 9,
    name: 'BMW M2',
    type: 'Petrol',
    Engine :'2993 cc',
    Power : '473 bhp',
    Torque: '600 Nm',
    Mileage: '17.9 kmpl',
    price: 'Price ₹1.03 Cr',
    image: require('../Asserts/modelimg9.avif'),
    bigImage: require('../Asserts/modelimg9.avif'),
  },

  {
    id: 10,
    name: 'BMW 3 Series',
    type: 'Petrol',
    Engine :'2998 cc',
    Power : '368.78 bhp',
    Torque: '500 Nm',
    Mileage: '16.9 kmpl',
    price: 'Price ₹74.90 Lakh',
    image: require('../Asserts/modelimg10.avif'),
    bigImage: require('../Asserts/modelimg10.avif'),
  },

  {
    id: 11,
    name: 'BMW 2 Series',
    type: 'Petrol / Diesel',
    Engine :'1998 cc',
    Power : '187.74 - 189.08 bhp',
    Torque: '280 Nm - 400 Nm',
    Mileage: '14.82 - 18.64 kmpl',
    price: 'Price ₹43.90 - 46.90 Lakh',
    image: require('../Asserts/modelimg11.avif'),
    bigImage: require('../Asserts/modelimg11.avif'),
  },

   {
    id: 12,
    name: 'BMW XM',
    type: 'Petrol / Diesel',
    Engine :'4395 cc',
    Power : '643.69 bhp',
    Torque: '800 Nm',
    Mileage: '18.64 kmpl',
    price: 'Price ₹2.60 Cr',
    image: require('../Asserts/modelimg12.avif'),
    bigImage: require('../Asserts/modelimg12.avif'),
  },
];

const Model = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const handleClose = () => {
    setSelectedCar(null);
  };

  return (
    <>

      <div className="models-container">
        <h1 className="models-title">HISTORIC BMW MODELS.</h1>
        <p className="models-description">
          BMW has crafted an impressive legacy in the automotive industry since its founding in 1916.
          From the early motorcycles and first car models in the 1920s to the iconic vehicles of the
          post-war era and modern classics, BMW’s history is marked by technical innovation, sporty
          design, and a passion for driving dynamics. This overview takes you through the key
          milestones and models that have made BMW one of the world’s most prestigious brands.
        </p>
      </div>

    {/* ///////////////////// */}


      <div className="model-container">
        <h1 className="model-title">MODELS</h1>
        
        <div className="model-grid">
          {cars.map((car) => (
            <div key={car.id} className="model-card" onClick={() => handleCarClick(car)}>
              <img src={car.image} alt={car.name} className="car-image" />
              <p className="car-name">{car.name}</p>
              <p className="car-type">{car.type}</p>
              <p className="car-Engine">{car.Engine}</p>
              <p className="car-Power">{car.Power}</p>
              <p className="car-Torque">{car.Torque}</p>
              <p className="car-Mileage">{car.Mileage}</p>
              <p className="car-price">{car.price}</p>
              
            </div>
          ))}
        </div>

        {selectedCar && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-button" onClick={handleClose}>
                &times;
              </button>
              <img src={selectedCar.bigImage} alt={selectedCar.name} className="big-car-image" />
              <div className="modal-info">
                <p className="modal-name">{selectedCar.name}</p>
                <p className="modal-type">{selectedCar.type}</p>
                <p className="modal-Engine">{selectedCar.Engine}</p>
                <p className="modal-Power">{selectedCar.Power}</p>
                  <p className="modal-Torque">{selectedCar.Torque}</p>
                  <p className="modal-Mileage">{selectedCar.Mileage}</p>
                <p className="modal-price">{selectedCar.price}</p>
                <div className="modal-actions">
                  <button className="modal-btn">Know More</button>
                  <button className="modal-btn primary">Configure & Price</button>
                  <button className="modal-btn">Book a Test Drive</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Model;
