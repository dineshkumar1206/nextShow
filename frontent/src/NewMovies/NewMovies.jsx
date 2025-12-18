import React from "react";
import NewVideoSection from "./NewVideoSection";
import UpcomingMoviesCarousel from "./UpcomingMoviesCarousel";
import NewReleaseMoviesCarousel from "./NewReleaseMoviesCarousel";

const NewMovies = () => {
  return (
    <div>
      <NewVideoSection />
      <UpcomingMoviesCarousel />
      <NewReleaseMoviesCarousel />
    </div>
  );
};

export default NewMovies;
