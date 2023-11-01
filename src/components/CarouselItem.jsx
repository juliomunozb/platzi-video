import React from "react";
import "../assets/styles/components/CarouselItem.scss";
const CarouselItem = () => (
  <div className="carousel-item">
    <img
      className="carousel-item__img"
      src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg"
      alt=""
    />
    <div className="carousel-item__details">
      <div>
        <img
          className="carousel-item__details--img"
          src="./assets/play-icon.png"
          alt="play"
        />
        <img
          className="carousel-item__details--img"
          src="./assets/plus-icon.png"
          alt="pluss"
        />
      </div>
      <p className="carousel-item__details--title">Título descriptivo</p>
      <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;