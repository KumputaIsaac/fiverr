import React from "react";
import "./catcard.scss";
import Slider from "infinite-react-carousel";
import { Link } from "react-router-dom";

export default function Carcard({ item }) {
  return (
    <Link to="/gigs?cat=design">
      <div className="catcard">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
}
