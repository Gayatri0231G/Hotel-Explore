import React from "react";
import "./HotelList.css";
import { IoSearch } from "react-icons/io5";

const hotels = [
  {
    id: 1,
    name: "Hotel Royal Blue",
    location: "Zurich, Switzerland",
    price: "$480/night",
    rating: "4.9 (6.8K)",
    image: "hotel.jpg",
  },
  {
    id: 2,
    name: "Warwick Grand Hotel",
    location: "New York, USA",
    price: "$480/night",
    rating: "5.0 (2.6K)",
    image: "hotel.jpg",
  },
  {
    id: 3,
    name: "Water Garden Inn",
    location: "London, UK",
    price: "$420/night",
    rating: "4.8 (5.2K)",
    image: "hotel.jpg",
  },
];

const HotelList = () => {
  return (
    <div className="hotel-container">
        <div className="head">
            <h4>Let's </h4>
            <a className="search"><IoSearch /></a>
        </div>
        <span className="highlight">Explore Hotels</span>
      
      
      <div className="category-tabs">
        <button className="active">Hotel</button>
        <button>Flight</button>
        <button>Place</button>
        <button>Food</button>
      </div>
      <h2 className="section-title">Popular Hotels</h2>
      <div className="hotel-list">
        {hotels.map((hotel) => (
          <div className="hotel-card" key={hotel.id}>
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p className="hotel-location">{hotel.location}</p>
              <div className="hotel-details">
                <span className="price">{hotel.price}</span>
                <span className="rating">{hotel.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
