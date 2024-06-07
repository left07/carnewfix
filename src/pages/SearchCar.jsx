import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import { Link } from "react-router-dom";

function SearchCar() {
  const [menu, setMenu] = useState([]);
  const [name_car, setName_car] = useState("");
  const [cat_car, setCat_car] = useState("");
  const [lower_car, setLower_car] = useState("");
  const [higher_car, setHigher_car] = useState("");
  const [status_car, setStatus_car] = useState("");
  const [page, setPage] = useState(1);
  const [lenData, setlenData] = useState(1);

  const getMenu = () => {
    if (
      cat_car !== "" &&
      lower_car !== "" &&
      higher_car !== "" &&
      status_car !== ""
    ) {
        

      axios
        .get(
          `https://api-car-rental.binaracademy.org/customer/v2/car?name=${name_car == ""? undefined : name_car}&category=${cat_car}&minPrice=${lower_car}&maxPrice=${higher_car}&page=${page}&pageSize=3&isRented=${status_car}`
        )
        .then((res) => {
          if (res?.data?.cars?.length !== 0) {
            console.log(res);
            console.log("success get API Filter");
            console.log(res?.data?.cars.length);
            const data = res?.data?.cars;
            setlenData(res?.data?.cars.length);
            setMenu(data);
          } else {
            setPage(page - 1);
          }
        })
        .catch((error) => {
          console.error("Error fetching data filter:", error);
          // setPage(0);
        });
    } else {
      // setPage(1);
      if (page !== 0) {
        axios
          .get(
            `https://api-car-rental.binaracademy.org/customer/v2/car?${name_car == "" ? "" : "&name="+name_car}${cat_car == ""? "" : "&category="+cat_car}${lower_car == ""? "" : "&minPrice="+lower_car}${higher_car == ""? "" : "&maxPrice="+higher_car}${status_car == ""? "" : "&isRented="+status_car}&page=${page}&pageSize=5`
          )
          .then((res) => {
            if (res?.data?.cars?.length !== 0) {
              console.log("success get API default");
              const data = res?.data?.cars;
              setlenData(res?.data?.cars.length);
              setMenu(data);
            } else {
              setPage(page - 1);
            }
          })
          .catch((error) => {
            {
              // page >= 2 ? setPage(0) : none;
              if (page >= 2) {
                setPage(0);
              }
            }
          });
      }
    }
  };

  const handleChange_Name = (e) => {
    setName_car(e.target.value);
  };
  const handleChange_Cat = (e) => {
    setCat_car(e.target.value);
  };
  

  const handleMaxPrice = (e) => {
    setLower_car(0)
    setHigher_car(e.target.value)
  }
  const handleChange_Status = (e) => {
    if (e.target.value === "1") {
      setStatus_car("true");
    } else if (e.target.value === "2") {
      setStatus_car("false");
    }
  };

  useEffect(() => {
    if (page !== 0) {
      getMenu();
    }
  }, []);

  useEffect(() => {
    getMenu();
  }, [page]);

  useEffect(()=>{
    console.log(name_car)
  },[name_car])

  return (
    <div className="App">
      <Navbar />
      <Header />
      <SearchForm 
        handleNameCar={handleChange_Name}
        handleCatCar={handleChange_Cat}
        handlePriceCar={handleMaxPrice}
        handleStatusCar={handleChange_Status}
        handleSubmit={getMenu}
      />

      <div>
        {menu?.map((item) => (
          <div className="wrapper-white catalog-wrapper">
            <div className="catalog-container">
              <Link to={`/menu/${item?.id}`}>
                <img width={200} src={item?.image} />
                <p>{item?.name}</p>
                <p>{item?.price} / hari</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Impedit, error.
                </p>
              </Link>
            </div>
          </div>
        ))}
        <div className="button-container">
          <button onClick={() => setPage(page - 1)}>back</button>
          <h2>{page}</h2>
          <button onClick={() => setPage(page + 1)}>next</button>
        </div>
      </div>
    </div>
  );
}

export default SearchCar;
