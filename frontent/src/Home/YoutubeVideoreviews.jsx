import React, { useState } from "react";
import VideoPlayer from "../Components/VideoPlayer";

const youtubeReviews = [
  {
    id: 1,
    movieName: "Jana Nayagan",
    title: "Jana Nayagan trailer",
    channelName: "Behindwoods",
    reviewer: "Reviewer 1",
    language: "Tamil",
    //thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
    videoOptions: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      techOrder: ["youtube"],
      sources: [
        {
          src: "https://youtube.com/shorts/aVjpADMuylE?si=J5ULxftBoU5Ya5T4",
          type: "video/youtube",
        },
      ],
    },
  },
  {
    id: 2,
    movieName: "Coolie",
    title: "Jana Nayagan trailer",
    channelName: "Film Companion",
    reviewer: "Baradwaj Rangan",
    language: "English",
    //thumbnail: "https://img.youtube.com/vi/y6120QOlsfU/mqdefault.jpg",
    videoOptions: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      techOrder: ["youtube"],
      sources: [
        {
          src: "https://www.youtube.com/watch?v=y6120QOlsfU",
          type: "video/youtube",
        },
      ],
    },
  },
];

export default function YoutubeVideoReviews() {
  const [activeTab, setActiveTab] = useState("Tamil");
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const languages = ["Tamil", "English", "Hindi", "Telugu"];

  const filteredReviews = youtubeReviews.filter(
    (review) => review.language === activeTab
  );

  const getYouTubeID = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Video mudinthavudan adutha video-vukku sella
  const handleNextVideo = (currentId) => {
    const currentIndex = filteredReviews.findIndex((r) => r.id === currentId);
    if (currentIndex !== -1 && currentIndex + 1 < filteredReviews.length) {
      setSelectedVideoId(filteredReviews[currentIndex + 1].id);
    } else {
      setSelectedVideoId(null); // List mudinthuvittathu
    }
  };

  const getFormatLink = (options) => {
    let sourceLink = options.sources[0].src;
    //console.log("getformatlink", sourceLink);
    // Shorts link or normal short link-ai format seiya
    if (sourceLink.includes("shorts/")) {
      sourceLink = sourceLink.replace("shorts/", "watch?v=");
    } else if (sourceLink.includes("youtu.be/")) {
      // youtu.be/ID format-ai watch?v=ID-ku matha (Optional but safer)
      sourceLink = sourceLink.replace("youtu.be/", "youtube.com/watch?v=");
    }

    return {
      ...options,
      sources: [
        {
          ...options.sources[0],
          src: sourceLink,
        },
      ],
    };
  };

  return (
    <div className="bg-[#0a0d14] p-6 md:p-16 text-white border-t border-gray-800">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <span className="text-red-600">YouTube</span> Latest Movie Reviews
      </h2>

      {/* Language Tabs */}
      <div className="flex gap-4 mb-8 overflow-x-auto no-scrollbar pb-2">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => {
              setActiveTab(lang);
              setSelectedVideoId(null); // Tab maarum pothu player-ai close panna
            }}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 border ${
              activeTab === lang
                ? "bg-red-600 border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                : "bg-transparent border-gray-700 hover:border-gray-500"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredReviews.map((review) => {
          const videoId = getYouTubeID(review.videoOptions.sources[0].src);
          const autoThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

          return (
            <div key={review.id} className="group flex flex-col">
              {/* YouTube Player or Thumbnail */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-gray-800 group-hover:border-red-600 transition-colors bg-black">
                {selectedVideoId === review.id ? (
                  <VideoPlayer
                    videoOptions={getFormatLink(review.videoOptions)}
                    onVideoEnd={() => handleNextVideo(review.id)}
                  />
                ) : (
                  <div
                    className="relative w-full h-full cursor-pointer flex items-center justify-center"
                    onClick={() => setSelectedVideoId(review.id)}
                  >
                    <img
                      src={autoThumbnail}
                      alt={review.movieName}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    {/* Custom Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-red-600 p-4 rounded-full shadow-lg transform group-hover:scale-110 transition-transform">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Details */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold group-hover:text-red-500 transition-colors">
                  {review.movieName}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <p className="text-gray-400 font-medium">
                    {review.channelName}
                  </p>
                  <span className="text-gray-500">by {review.reviewer}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredReviews.length === 0 && (
        <p className="text-gray-500 text-center py-10">
          No reviews found for this language.
        </p>
      )}
    </div>
  );
}
