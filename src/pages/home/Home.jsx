import React from "react";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../data";
import Catcard from "../../components/catcart/Catcard";

const Home = () => {
  return (
    <div className="home">
      <Featured />

      <Slide slidesToShow={5} arrowsScroll={4}>
        {cards.map((card) => (
          <Catcard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features ">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Fiverr Business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur lacinia magna, in sodales massa nec.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Sed sollicitudin nulla ac tellus fermentum, a lacinia nulla
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Sed sollicitudin nulla ac tellus fermentum, a lacinia nulla
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Sed sollicitudin nulla ac tellus fermentum, a lacinia nulla
            </div>

            <button>Explore Fiverr Business</button>
          </div>

          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>

      <Slide slidesToShow={5} arrowsScroll={4}>
        {projects.map((card) => (
          <Catcard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
