import React from "react";
import Slider from "react-slick";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { ChevronRight } from "lucide-react";

// ⭐ Arrows Reusable
const NextArrow = ({ className, style, onClick }) => (
  <div className="hidden md:hidden lg:block">
    <div
      className={`
      ${className}  !right-[-25px] !z-20 !w-12 !h-12 
      flex items-center justify-center 
      rounded-full 
      bg-gradient-to-br from-[#ffffff25] to-[#00000055]
      border border-white/20 
      backdrop-blur-md
      hover:from-[#ffffff40] hover:to-[#00000080]
      transition-all duration-300 cursor-pointer shadow-lg
    `}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <HiChevronRight className="text-white text-3xl drop-shadow-xl" />
    </div>
  </div>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div className="hidden md:hidden lg:block">
    <div
      className={`
      ${className} !left-[-25px] !z-20 !w-12 !h-12 
      flex items-center justify-center 
      rounded-full 
      bg-gradient-to-br from-[#ffffff25] to-[#00000055]
      border border-white/20 
      backdrop-blur-md
      hover:from-[#ffffff40] hover:to-[#00000080]
      transition-all duration-300 cursor-pointer shadow-lg
    `}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <HiChevronLeft className="text-white text-3xl drop-shadow-xl" />
    </div>
  </div>
);

const MovieGallery = () => {
  // Dynamic Video/Photo IDs
  const videoIds = [
    "zdu0YzzJ10o",
    "zdu0YzzJ10o",
    "zdu0YzzJ10o",
    "zdu0YzzJ10o",
    "zdu0YzzJ10o",
    "zdu0YzzJ10o",
    "zdu0YzzJ10o",
    "zdu0YzzJ10o",
  ];

  const getYTThumbnail = (id) =>
    `https://img.youtube.com/vi/${id}/mqdefault.jpg`;

  const settings = {
    dots: false,
    infinite: videoIds.length > 4, // 4-ku mela iruntha mattum infinite
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5, // Mobile-la konjam next photo theriya
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="py-8 bg-[#0f0f0f] text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 px-4">
        <div className="flex items-center gap-2 group cursor-pointer">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center">
            Photos
            <ChevronRight
              className="ml-2 group-hover:text-yellow-500 transition-colors"
              size={28}
            />
          </h2>
          <span className="text-gray-500 font-normal text-xl">
            ({videoIds.length})
          </span>
        </div>
      </div>

      {/* Carousel Section - Ellame images-ah mattum kaatum */}
      <div className="relative px-2 md:px-8">
        <Slider {...settings}>
          {videoIds.map((id, index) => (
            <div key={index} className="px-2">
              <div className="relative overflow-hidden rounded-xl cursor-pointer group bg-zinc-900 border border-white/5 shadow-md">
                <img
                  src={getYTThumbnail(id)}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieGallery;
