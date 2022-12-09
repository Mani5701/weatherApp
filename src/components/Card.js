import React ,{useState} from "react";
import { useEffect } from "react";
import "./card.css";

function Card() {

  const [city ,setCity] = useState();
  const [search ,setSearch] = useState('lahore');

  useEffect(()=>{
     const fetchApi = async()=>{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ec541bcd70151f3c3f44313455ea9296`);
        let json = await response.json();
        console.log(json)
        setCity(json.main,json.weather);
        document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${search}"`
     };
     fetchApi(); 
  },[search])
  

  return (
    <>
      <div className="container">
        <div className="card">
        <input type="search" className="search text-capitalize" onChange={(e)=>{setSearch(e.target.value)}} id="search" placeholder="Search Here"/>
          {!city ? <div className="container">
            <h5 className="text-capitalize">no data found</h5>
          </div>:
          <div className="card-body">
            <div className="cityinfo">
            <i className="fa-solid fa-street-view fa-2x"></i>
            <h3 className="card-title mx-3">{search}</h3>
            </div>
            <div className="tempInfo">
            <h1 className="mx-2">{city.temp}&deg;C</h1>
            {/* <img src={`https://openweathermap.org/img/wn/${city.icon}.png`} alt="icon" className="icon"/> */}
            </div>
            <div className="descIcon">
            {/* <p className="text-capitalize">{city.weather[0].description}</p> */}
            <p>Min-temp : {city.temp_min}&deg;C </p>
            <p>Max-temp : {city.temp_max}&deg;C</p>
            </div>
          </div>
          }
        </div>
      </div>
    </>
  );
}

export default Card;
