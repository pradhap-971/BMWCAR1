import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';




function Login({ closeModal, switchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password
      });
      alert(res.data);
      closeModal(); // Close on success
    } catch (err) {
      alert('Login Failed');
    }
  };

  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <button className="close-button" onClick={closeModal}>×</button>
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
          <p className="switch-link">
            Don’t have an account?{' '}
            <span className="link" onClick={switchToRegister}>
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;