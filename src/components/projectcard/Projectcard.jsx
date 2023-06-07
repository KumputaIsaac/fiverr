import React from "react";
import "./projectcard.scss";
import Slider from "infinite-react-carousel";
import { Link } from "react-router-dom";

export default function Projectcard({ item }) {
  return (
    <Link to="/gigs?Project=design">
      <div className="Projectcard">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
}
