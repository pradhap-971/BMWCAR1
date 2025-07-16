import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';




function Register({ closeModal, switchToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/users/register', {
        email,
        password
      });
      alert("User Registered");
      closeModal(); // Close on success
    } catch (err) {
      alert('Registration Failed');
    }
  };

  return (
    <div className="register-popup">
      <div className="register-popup-content">
        <button className="close-button" onClick={closeModal}>×</button>
        <form onSubmit={handleRegister} className="register-form">
          <h2>Register</h2>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Register</button>
          <p className="switch-link">
            Already have an account?{' '}
            <span className="link" onClick={switchToLogin}>
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Register;