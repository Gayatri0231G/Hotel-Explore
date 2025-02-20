import React from "react";
import "./HotelList.css";
import { IoSearch } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { TiStarOutline } from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5"
import { CiHome } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { TbAlignBoxCenterStretch } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { FaHotel, FaPlane, FaMapMarkerAlt, FaUtensils } from "react-icons/fa";


const HotelList = () => {
  return (
    <div className="explore-hotels">
    <div className="hotel-container">
        <div className="head">
            <h4>Let's </h4>
            <a className="search"><IoSearch /></a>
        </div>
        <span className="highlight">Explore Hotels</span>
      
      <div className="category-nav">
        <div className="category-item active">
          <FaHotel size={18} />
          <span className="icons-title">Hotel</span>
        </div>
        <div className="category-item">
          <FaPlane size={18} />
          <span className="icons-title">Flight</span>
        </div>
        <div className="category-item">
          <FaMapMarkerAlt size={18} />
          <span className="icons-title">Place</span>
        </div>
        <div className="category-item">
          <FaUtensils size={18}/>
          <span className="icons-title">Food</span>
        </div>
      </div>
      <div className="header">
      <h2 className="section-title">Popular Hotels</h2>
      <a className="see">see all</a>
      </div>
      <div className="hotel-list">
        <div className="hotel-img">
          <img src="https://th.bing.com/th/id/OIP.pEK2GyNkCAAkV1SOv1HEXQHaFu?w=219&h=180&c=7&r=0&o=5&pid=1.7"></img>
          <div className="pagination">
            <span className="dot"></span>
            <span className="dot active"></span>
          <span className="dot"></span>
        </div>
      </div>
      <div className="bookmarks"><CiBookmark /></div>
      <div className="hotel-title">Hotel Royal Blue</div>
      <div className="location"><IoLocationOutline /> Zerich Switzerland</div>
      <div className="rate">
        <div className="dollar">$480/<a className="night">night</a></div>
        <div className="rating"><TiStarOutline /> 4.9<a className="rat">(6.8K)</a></div>
      </div>
    </div>
    <div className="low-cost">Low Cost Hotels</div>
    <div className="grand-box">
      <div className="warwick">
        <div className="warwick-imgg"><img src="https://th.bing.com/th/id/OIP.iH5GIeX6I5wYHgVsUtu51QHaE7?w=226&h=180&c=7&r=0&o=5&pid=1.7"></img></div>
        <div className="warwick-title">Warwick Grand Hotel<p className="location-new"><IoLocationOutline /> New York</p>
        <p className="star"><TiStarOutline /> 5.0<a className="rat1">(2.4K)<a className="dollar">$480/</a><a className="night">night</a></a></p></div>
      </div>
    </div>
    <div className="grand-box2">
    <div className="warwick">
        <div className="warwick-imgg"><img src="https://th.bing.com/th/id/OIP.tDK4UMcUN5bkrLn2CqtCeQHaE8?w=216&h=180&c=7&r=0&o=5&pid=1.7"></img></div>
        <div className="warwick-title1">Warwick Grand int</div></div>
    </div>
    <div className="icons-bottom">
      <div className="icons">
      <a className="icons1"><CiHome /></a>
      <a className="icons2"><CiHeart /></a>
      <a className="icons2"><TbAlignBoxCenterStretch /></a>
      <a className="icons2"><IoChatboxEllipsesOutline /></a>
      <a className="icons2"><CiUser /></a>
      </div>
    </div>
  </div>
  </div>
  
  );
};

export default HotelList;
