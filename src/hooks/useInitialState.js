import { useState, useEffect } from "react";

const useInitialState = (API) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return videos;
};

export default useInitialState;
