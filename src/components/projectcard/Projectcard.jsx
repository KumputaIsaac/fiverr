import React from "react";
import "./projectcard.scss";
import Slider from "infinite-react-carousel";
import { Link } from "react-router-dom";

export default function Projectcard({ item }) {
  return (
    <Link to="/">
      <div className="projectcard">
        <img src={item.img} alt="" />
      </div>
    </Link>
  );
}
