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

  return (
    <div className="App">
      <Header />
      <Search />
      {(videos.myList || []).length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {(videos.trends || []).length > 0 &&
            videos.trends.map((video) => (
              <CarouselItem key={video.id} {...video} />
            ))}
        </Carousel>
      </Categories>

      <Categories title="Recomendados">
        <Carousel>
          {(videos.originals || []).length > 0 &&
            videos.originals.map((video) => (
              <CarouselItem key={video.id} {...video} />
            ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
