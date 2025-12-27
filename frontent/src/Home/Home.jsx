import React from "react";
import VideoDetailScreen from "./VideoDetailScreen";
import UpcomingMoviesCarousel from "../NewMovies/UpcomingMoviesCarousel";
import NewReleaseMoviesCarousel from "../NewMovies/NewReleaseMoviesCarousel";
import YoutubeVideoReviews from "./YoutubeVideoreviews";
import MovieStreamingSection from "./MovieStreamingSection";
import MoviesSection from "./MoviesSection";
import TrailerSection from "./TrailerSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Nprogress from "nprogress";
import { fetchActiveVideos } from "../redux/HomeContentSlice/VideoSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { FaSpinner } from "react-icons/fa6";

const Home = () => {
  const dispatch = useDispatch();
  const [isPageLoading, setIsPageLoading] = useState(false);

  const { activeVideos } = useSelector((state) => state.videoSection);

  console.log(activeVideos);

  const hasData = activeVideos.length > 0;

  useEffect(() => {
    const fetchAllHomeData = async () => {
      if (hasData) {
        setIsPageLoading(false);
        return;
      }

      try {
        setIsPageLoading(true);
        Nprogress.start();

        await Promise.all([dispatch(fetchActiveVideos()).then(unwrapResult)]);
      } catch (error) {
        console.error("Home Page Parallel Fetch Error:", error);
      } finally {
        setIsPageLoading(false);
        Nprogress.done();
      }
    };

    fetchAllHomeData();
  }, [dispatch]);

  // Loading Screen
  if (isPageLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-[45vh] md:h-[75vh] bg-gray-50">
        <FaSpinner className="animate-spin text-[#2A3855] text-5xl mb-4" />
        {/* <p className="text-[#2A3855] font-medium animate-pulse">
          Loading amazing content...
        </p> */}
      </div>
    );
  }

  return (
    <div className="pb-20">
      <VideoDetailScreen activeVideos={activeVideos} />
      {/* <UpcomingMoviesCarousel />
      <NewReleaseMoviesCarousel /> */}
      <MovieStreamingSection />
      <MoviesSection />
      <TrailerSection />
      {/* <YoutubeVideoReviews /> */}
    </div>
  );
};

export default Home;
