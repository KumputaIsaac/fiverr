import React from "react";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import { cards } from "../../data";
import Catcard from "../../components/catcart/Catcard";

const Home = () => {
  return (
    <div className="home">
      <Featured />

      <Slide slidesToShow={5} arrowsScroll={3}>
        {cards.map((card) => (
          <Catcard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
