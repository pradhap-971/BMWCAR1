import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './compoents/Navbar/navbar';
import Home from './compoents/Home/home';
import About from './compoents/About/about';
import Services from './compoents/Services/services';
import Booking from './compoents/Booking/booking';
import Reviews from './compoents/Reviews/reviews';
import Models from './compoents/Models/models';
import Electric from './compoents/Electric_Car/Electric-car';
import Hybrid from './compoents/plug-in-hybrid/elctric_plug';
import Contact from './compoents/Contact/contact';
import Footer from './compoents/Footer/footer';
import Login from './compoents/Login/login';
import Register from './compoents/Register/register';



function App() {
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(true); // true = Login, false = Register

  const closeModal = () => setShowLoginModal(false);


  return (
    <Router>
      <Navbar 
        showLoginModal={() => {
          setIsLogin(true);
          setShowLoginModal(true);
        }}
        showRegisterModal={() => {
          setIsLogin(false);
          setShowLoginModal(true);
        }}
      />
      
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="booking"><Booking /></div>
      <div id="reviews"><Reviews /></div>
      <div id="models"><Models /></div>
      <div id="electric"><Electric /></div>
      <div id="hybrid"><Hybrid /></div>
      <div id="contact"><Contact /></div>
      
      
      
      
      <Footer />
      
      {/* Render Login or Register as Modal */}
      {showLoginModal && (
        isLogin ? (
          <Login closeModal={closeModal} switchToRegister={() => {
            setIsLogin(false);
          }} />
        ) : (
          <Register closeModal={closeModal} switchToLogin={() => {
            setIsLogin(true);
          }} />
        )
      )}
      
      
    </Router>
  );
}

export default App;