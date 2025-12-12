import React from "react";
import VideoDetailScreen from "./VideoDetailScreen";
import UpcomingMoviesCarousel from "./UpcomingMoviesCarousel";
import NewReleaseMoviesCarousel from "./NewReleaseMoviesCarousel";

const Home = () => {
  return (
    <div className="">
      <VideoDetailScreen />
      <UpcomingMoviesCarousel />
      <NewReleaseMoviesCarousel />
    </div>
  );
};

export default Home;
