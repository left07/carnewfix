import React from 'react';
import './Header.css';
import carImage from '../assets/car1.png';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        <Link to={"/SearchCar"}>
          <button>Mulai Sewa Mobil</button>
        </Link>
      </div>
      <div className="header-image">
      <img src={carImage} alt="Car" />
      </div>
    </header>
  );
}

export default Header;
