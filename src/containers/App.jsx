import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import "../assets/styles/App.scss";
const API = "http://localhost:3000/initalState";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const videos = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        setVideos([]);
        console.log("Error invocando API", error.message);
      }
    };
    videos();
  }, []);

  console.log(videos);
  return (
    <div className="App">
      <Header />
      <Search />
      <Categories title="Mi lista">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Categories title="Tendencias">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Categories title="Recomendados">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
