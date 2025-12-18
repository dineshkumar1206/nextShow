import React from "react";
import VideoDetailScreen from "./VideoDetailScreen";
import UpcomingMoviesCarousel from "./UpcomingMoviesCarousel";
import NewReleaseMoviesCarousel from "./NewReleaseMoviesCarousel";
import MovieReviewsSection from "./MovieReviewsSection";
import YoutubeVideoReviews from "./YoutubeVideoreviews";

const Home = () => {
  return (
    <div className="pb-20">
      <VideoDetailScreen />
      <UpcomingMoviesCarousel />
      <NewReleaseMoviesCarousel />
      <MovieReviewsSection />
      {/* <YoutubeVideoReviews /> */}
    </div>
  );
};

export default Home;
