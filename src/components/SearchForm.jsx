import React from 'react';
import './SearchForm.css';

const SearchForm = ({
  handleNameCar,
  handleCatCar,
  handlePriceCar,
  handleStatusCar,
  handleSubmit
}) => {

  return (
    <div className="search-form">
      <input onChange={handleNameCar} type="text" placeholder="Nama Mobil" />
      <select
          onChange={handleCatCar}
        >
          <option value="">Pilih Kategori</option>
          <option value={"small"}>2 - 4 Orang</option>
          <option value={"medium"}>4 - 6 Orang</option>
          <option value={"large"}>6 - 8 Orang</option>
        </select>
      <input onChange={handlePriceCar} type="text" placeholder="Harga" />
      <select onChange={handleStatusCar}>
        <option value="1">Disewa</option>
        <option value="2">Dijual</option>
      </select>
      <button onClick={handleSubmit}>Cari Mobil</button>
    </div>
  );
};

export default SearchForm;
