import React from "react";
import "./featured.scss";

export default function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the perfect feelance services for your business</h1>
          <div className="search">
            <div className="searchinput">
              <img src="./img/search.png" alt="" />
              <input type="text " placeholder="try building mobile app" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}
