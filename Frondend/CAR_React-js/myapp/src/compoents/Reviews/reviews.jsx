import React, { useState } from 'react';
import './reviews.css';

import image1 from '../Asserts/reviewimg1.jpeg';
import image2 from '../Asserts/reviewimg2.webp';
import image3 from '../Asserts/reviewimg3.avif';
import image4 from '../Asserts/reviewimg4.avif';
import image5 from '../Asserts/reviewimg5.avif';
import image6 from '../Asserts/reviewimg6.avif';
import logo from '../Asserts/reviewimglogo.png';
import image7 from '../Asserts/reviewimg8.avif';
import image8 from '../Asserts/reviewimg7.avif';
import image9 from '../Asserts/reviewimg9.avif';
import image10 from '../Asserts/reviewimg10.avif';

const reviewsData = [
  {
    image: image1,
    name: 'BMW 3 Series',
    rating: 4.3,
    reviews: 87,
    price: '₹74.90 Lakh',
    emi: '₹2.96 Lakh',
  },
  {
    image: image2,
    name: 'BMW M5',
    rating: 4.7,
    reviews: 97,
    price: '₹1.99 Cr',
    emi: '₹7.96 Lakh',
  },
  {
    image: image3,
    name: 'BMW X1',
    rating: 3.7,
    reviews: 127,
    price: '₹50.80 - 53.80 Lakh',
    emi: '₹1.96 Lakh',
  },
  {
    image: image4,
    name: 'BMW M8 Coupe Competition',
    rating: 6.7,
    reviews: 130,
    price: '₹2.44 Cr',
    emi: '₹5 Lakh',
  },
  {
    image: image5,
    name: 'BMW 3 Series Long Wheelbase',
    rating: 7.7,
    reviews: 140,
    price: '₹62 - 65 Lakh',
    emi: '₹7 Lakh',
  },
  {
    image: image6,
    name: 'BMW iX',
    rating: 4.8,
    reviews: 110,
    price: '₹1.40 Cr',
    emi: '₹5 Lakh',
  },

  {
    image: image7,
    name: 'BMW Z4',
    rating: 7.8,
    reviews: 210,
    price: '₹92.90 - 97.90 Lakh',
    emi: '₹3.5 Lakh',
  },

  {
    image: image8,
    name: 'BMW M2',
    rating: 8.8,
    reviews: 150,
    price: '₹1.03 Cr',
    emi: '₹6.5 Lakh',
  },

  {
    image: image9,
    name: 'BMW i5',
    rating: 9.8,
    reviews: 140,
    price: '₹1.20 Cr',
    emi: '₹9.5 Lakh',
  },

  // {
  //   image: image10,
  //   name: 'BMW i4',
  //   rating: 8.4,
  //   reviews: 120,
  //   price: '₹72.50 - 77.50 Lakh',
  //   emi: '₹1.5 Lakh',
  // },

];

const sampleReviews = [
  {
    name: 'Ashwin',
    date: 'Jun 20, 2025',
    rating: 4.2,
    title: 'My Experience Driving M340i',
    content: 'Experience was fantastic driving it felt something more than regular 3 series...',
    likes: 1,
  },
  {
    name: 'Aakash',
    date: 'Jun 18, 2025',
    rating: 4.3,
    title: 'Performance',
    content: 'Handling of this car is very good even in high speeds...',
    likes: 0,
  },
  {
    name: 'Naveen kumar',
    date: 'Aug 19, 2024',
    rating: 4.8,
    title: 'Performance',
    content: 'Handling of this car is very good even in high speeds...',
    likes: 1,
  },

  {
    name: 'ukesh',
    date: 'Apr 05, 2025',
    rating: 5.3,
    title: 'Performance',
    content: 'Handling of this car is very good even in high speeds...',
    likes: 5,
  },
  {
    name: 'Lee',
    date: 'Aug 08, 2025',
    rating: 6.3,
    title: 'Performance',
    content: 'Handling of this car is very good even in high speeds...',
    likes: 10,
  },
  {
    name: 'Pradhap',
    date: 'Feb 01, 2025',
    rating: 3.3,
    title: 'Performance',
    content: 'Handling of this car is very good even in high speeds...',
    likes: 11,
  },

  {
    name: 'Srinivasan',
    date: 'Apr 25, 2025',
    rating: 6.4,
    title: 'Performance',
    content: 'Handling of this car is very good even in high speeds...',
    likes: 4,
  },

  {
    name: 'Mohan',
    date: 'Mar 23, 2025',
    rating: 4.3,
    title: 'Performance',
    content: 'Handling of this car is very good even in high speeds...',
    likes: 6,
  },

];

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  return (
    <>
      {/* Banner */}
      <div className="review-banner">
        <div className="review-banner-text">
          <h1>BMW CAR REVIEWS</h1>
          <p>Read reviews of the latest models and discover the prices and deals</p>
        </div>
        <div className="review-banner-logo">
          <img src={logo} alt="BMW Logo" />
        </div>
      </div>

      {/* Car Cards */}
      <div className="review-card-container">
        {reviewsData.map((car, index) => (
          <div className="review-card" key={index}>
            <img src={car.image} alt={car.name} className="review-image" />
            <div className="review-content">
              <div className="review-header">
                <h2>{car.name} </h2>
                <span className="wishlist-icon">♡</span>
              </div>

              <div className="review-rating">
                <span className="rating-value">{car.rating}</span>
                <span className="star">★</span>
                <span className="reviews-count">{car.reviews} Reviews</span>
              </div>

              <div className="review-price">{car.price} <sup>*</sup></div>
              <div className="review-emi"><a href="#emi">EMI starts @ {car.emi}</a></div>

              <button className="review-offer-btn" onClick={() => setSelectedReview(car)}>
                Reviews 
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Slide-In Review Panel */}
      <div className={`slide-panel ${selectedReview ? 'open' : ''}`}>
        <div className="slide-panel-header">
          <h3>{selectedReview?.name} - User Reviews</h3>
          <button onClick={() => setSelectedReview(null)} className="close-btn">×</button>
        </div>

        <div className="slide-panel-content">
          {sampleReviews.map((review, index) => (
            <div className="review-box" key={index}>
              <div className="review-top">
                <div className="avatar">{review.name.charAt(0)}</div>
                <div>
                  <strong>{review.name}</strong> on {review.date}
                  <div className="review-rating">
                    <strong>{review.rating}</strong> <span className="star">★</span>
                  </div>
                </div>
              </div>
              <h4>{review.title}</h4>
              <p>{review.content}</p>
              <div className="review-actions">
                <button>👍 {review.likes}</button>
                <button>💬</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
