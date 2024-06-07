import React from 'react';
import './Hero.css';
import carImage from '../assets/car1.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
      </div>
      <div className="hero-img">
        <img src={carImage} alt="Car" />
        <div className="blue-background"></div>
      </div>
    </section>
  );
};

export default Hero;
