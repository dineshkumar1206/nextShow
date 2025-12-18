import React from "react";
import VideoDetailScreen from "./VideoDetailScreen";
import UpcomingMoviesCarousel from "../NewMovies/UpcomingMoviesCarousel";
import NewReleaseMoviesCarousel from "../NewMovies/NewReleaseMoviesCarousel";
import YoutubeVideoReviews from "./YoutubeVideoreviews";
import MovieStreamingSection from "./MovieStreamingSection";
import MoviesSection from "./MoviesSection";

const Home = () => {
  return (
    <div className="pb-20">
      <VideoDetailScreen />
      {/* <UpcomingMoviesCarousel />
      <NewReleaseMoviesCarousel /> */}
      <MovieStreamingSection />
      <MoviesSection />
      {/* <YoutubeVideoReviews /> */}
    </div>
  );
};

export default Home;
