import React from "react";
import { Plus, ChevronRight, Settings, Eye, ExternalLink } from "lucide-react";

const MovieDescriptionSection = ({ movie }) => {
  // const genres = [
  //   "Tamil",
  //   "Coming-of-Age",
  //   "Workplace Drama",
  //   "Comedy",
  //   "Drama",
  //   "Sport",
  // ];

  // const parseData = (data) => {
  //   try {
  //     return typeof data === "string" ? JSON.parse(data) : data;
  //   } catch (error) {
  //     return [];
  //   }
  // };

  const parseData = (data) => {
    try {
      let result = data;
      // Data string-aaga irukkum varai parse pannu (Handling "\"[[...]]\"")
      while (typeof result === "string") {
        result = JSON.parse(result);
      }

      return Array.isArray(result) ? result : [];
    } catch (error) {
      // Oru velai plain string-aa irundha (Ex: "Tamil"), adhayae array-vaa maathuvom
      if (typeof data === "string" && data.trim() !== "") {
        return [data];
      }
      return [];
    }
  };

  const genres = parseData(movie?.genres);
  const languages = parseData(movie?.language);

  return (
    <div className="py-6 bg-[#121212] space-y-4 mb-8 text-white">
      {/* Genres & Languages Tags */}
      {/* Language Section */}
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest min-w-[80px]">
          Languages:
        </span>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <span
              key={lang}
              className="px-3 py-1 border border-yellow-600/50 text-yellow-500 rounded-md text-xs font-bold bg-yellow-600/10"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Genre Section */}
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest min-w-[80px]">
          Genres:
        </span>
        <div className="flex flex-wrap gap-2">
          {genres.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 border border-gray-700 text-gray-300 rounded-md text-xs md:text-sm hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Main Container: Mobile-la flex-col, Desktop-la flex-row (gap-12) */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Side: Info & Cast */}
        <div className="flex-1 order-1">
          <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-6">
            {movie.longDescription}
          </p>

          {/* Director, Writer, Stars List */}
          <div className="space-y-1 border-t border-gray-700">
            <div className="flex items-center py-3 border-b border-gray-700">
              <span className="font-bold w-20 text-sm md:text-base">
                Director
              </span>
              <span className="text-blue-400 hover:underline cursor-pointer ml-2 text-sm md:text-base">
                {movie.director}
              </span>
            </div>

            <div className="flex items-center py-3 border-b border-gray-700">
              <span className="font-bold w-20 text-sm md:text-base">
                Writer
              </span>
              <span className="text-blue-400 hover:underline cursor-pointer ml-2 text-sm md:text-base">
                {movie.writer || "N/A"}
              </span>
            </div>

            <div className="flex items-start md:items-center py-3 border-b border-gray-700 group cursor-pointer">
              <span className="font-bold w-20 shrink-0 text-sm md:text-base">
                Stars
              </span>
              <div className="flex-1 overflow-hidden items-center ml-2">
                {/* line-clamp-2 nu potta 2 lines-ku mela pona truncate aagum */}
                <div className="line-clamp-2 text-sm md:text-base">
                  {movie.cast ? (
                    movie.cast.split(",").map((star, index, array) => (
                      <React.Fragment key={index}>
                        <span className="text-blue-400 hover:underline cursor-pointer">
                          {star.trim()}
                        </span>
                        {index < array.length - 1 && (
                          <span className="text-white mx-2 font-bold">•</span>
                        )}
                      </React.Fragment>
                    ))
                  ) : (
                    <span className="text-gray-500">N/A</span>
                  )}
                </div>
              </div>
              <div className="ml-auto">
                <ChevronRight
                  className="text-white group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </div>
            </div>

            {/* IMDb Pro Link */}
            <div className="flex items-center pt-4 text-blue-400 text-xs md:text-sm font-medium hover:underline cursor-pointer">
              <span className="text-white font-black italic mr-2">IMDbPro</span>
              <span>See production info at IMDbPro</span>
              <ExternalLink size={14} className="ml-1" />
            </div>
          </div>
        </div>

        {/* Right Side: Streaming & Watchlist - Mobile-la order-2 (Description-ku kila varum) */}
        <div className="w-full lg:w-80 shrink-0 space-y-6 order-2">
          {/* Watchlist Section (Uncommented and Responsive) */}
          {/* <div className="space-y-2">
            <div className="flex w-full">
              <button className="flex-1 bg-[#f5c518] hover:bg-[#e2b616] text-black font-bold py-3 px-4 rounded-l-md flex items-center justify-center gap-2">
                <Plus size={20} strokeWidth={3} />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-sm md:text-base">Add to Watchlist</span>
                  <span className="text-[10px] font-normal opacity-80">
                    Added by 2.3K users
                  </span>
                </div>
              </button>
              <button className="bg-[#f5c518] hover:bg-[#e2b616] text-black border-l border-black/20 px-3 rounded-r-md">
                <ChevronRight className="rotate-90" size={20} />
              </button>
            </div>

            <button className="w-full bg-[#2c2c2c] hover:bg-[#3d3d3d] text-white py-3 rounded-md flex items-center justify-center gap-2 transition-colors">
              <Eye size={20} className="text-blue-400" />
              <span className="font-semibold text-sm md:text-base">
                Mark as watched
              </span>
            </button>
          </div> */}

          {/* Streaming Info */}
          <div className="pt-2">
            <span className="text-[10px] md:text-xs font-bold text-yellow-500 block mb-2 uppercase tracking-widest">
              Streaming
            </span>
            <div className="bg-[#1a1a1a] border border-gray-800 p-4 rounded-lg flex justify-center items-center hover:bg-gray-800 transition-colors cursor-pointer group">
              <span className="text-red-600 font-bold text-2xl md:text-3xl tracking-tighter group-hover:scale-105 transition-transform">
                NETFLIX
              </span>
            </div>
            <button className="flex items-center gap-2 mt-3 text-blue-400 text-xs md:text-sm hover:underline">
              <Settings size={14} />
              <span>Set your preferred services</span>
            </button>
          </div>

          {/* Reviews Info */}
          <div className="flex gap-6 text-blue-400 text-xs md:text-sm font-medium border-t border-gray-800 lg:border-none pt-4 lg:pt-0">
            <span className="hover:underline cursor-pointer">
              129{" "}
              <span className="text-gray-400 font-normal">User reviews</span>
            </span>
            <span className="hover:underline cursor-pointer">
              5{" "}
              <span className="text-gray-400 font-normal">Critic reviews</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDescriptionSection;
