import React, { useState } from 'react';
import './booking.css';
import bmwCarImage from '../Asserts/bookingimg2.png'; 
import axios from 'axios';
const Booking = () => {
  const [formData, setFormData] = useState({
    branch: '',
    salutation: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    bmwFinance: false,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.termsAccepted) {
    alert('Please accept the Terms & Conditions.');
    return;
  }

  try {
    const res = await axios.post('http://localhost:8080/api/bookings', formData);
    console.log('Success:', res.data);
    alert("Booking submitted successfully!");
  } catch (err) {
    console.error('Error submitting booking:', err);
    alert("Failed to submit booking.");
  }
};




  return (
    <div className="booking-container">
      <div className="form-section">
        <h2>Book A Test Drive</h2>
        <p>Please fill the form below.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Branch</label>
            <select name="branch" value={formData.branch} onChange={handleChange}>
              <option value="">--Select--</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Chennai">Chennai</option>
              <option value="Kochi">Kochi</option>
              <option value="Pune">Pune</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Lucknow">Lucknow</option>
            </select>
          </div>

          <div className="form-group">
            <label>Salutation</label>
            <select name="salutation" value={formData.salutation} onChange={handleChange}>
              <option value="">--Select--</option>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Mrs.">Mrs.</option>
            </select>
            <input
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="form-check">
            <label>
              <input
                type="checkbox"
                name="bmwFinance"
                checked={formData.bmwFinance}
                onChange={handleChange}
              />
              Interested in BMW Financial Services' plans and offers.
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              I accept the <a href="#terms">Terms & Conditions</a>.
            </label>
          </div>

          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>

      <div className="image-section">
        <img src={bmwCarImage} alt="BMW Car" />
      </div>
    </div>
  );
};

export default Booking;
