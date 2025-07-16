import React from 'react';
import './contact.css';
import  { useState } from 'react';
import axios from 'axios';


const Contact = () => {

      const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    model: '',
    city: '',
    terms: false,
    robot: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };


 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.terms) {
    alert("Please accept the Terms & Conditions.");
    return;
  }

  try {
    const response = await axios.post('http://localhost:8080/api/contact', formData);
    console.log('Contact form submitted:', response.data);
    alert("Thank you! We will contact you soon.");
  } catch (error) {
    console.error('Error submitting form:', error);
    alert("There was a problem submitting your contact form.");
  }
};



  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">CONTACT US</h2>
          <h3 className="contact-subtitle">BMW Motorrad India</h3>
          
          <div className="contact-info">
            <p className="contact-text">
              To contact us, please send an email to <a href="mailto:contact-india@bmw-motorrad.in" className="contact-link">contact-india@bmw-motorrad.in</a> or to reach our Customer
              Interaction Centre, dial toll free number <a href="tel:18002036263" className="contact-link">1800 2036 263</a> from Monday - Saturday (09:00 AM -
              06:30 PM).
            </p>
          </div>
          
          <div className="contact-methods">
            <a href="mailto:contact-india@bmw-motorrad.in" className="contact-method email">
              <div className="method-icon">✉️</div>
              <span className="method-text">Email Us</span>
            </a>
            
            <a href="tel:18002036263" className="contact-method phone">
              <div className="method-icon">📞</div>
              <span className="method-text">Call Us</span>
            </a>
          </div>
        </div>
      </section>


      <div className="bmw-contact-form">
        <h2 className="form-title">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <select 
                name="title" 
                value={formData.title}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Title</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Dr">Dr</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <select 
                name="model" 
                value={formData.model}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Model Interested</option>
                <option value="X5">X5</option>
                <option value="5 Series">5 Series</option>
                <option value="3 Series">3 Series</option>
                <option value="BMW M5">BMW M5</option>
                <option value="BMW X1">BMW X1</option>
                <option value="BMW X5">BMW X5</option>
                <option value="BMW X7">BMW X7</option>
                <option value="BMW M2">BMW M2</option>
                <option value="BMW M8 Coupe Competition">BMW M8 Coupe Competition</option>


              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              <span>Please accept the T & C</span>
            </label>
          </div>

         

          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;