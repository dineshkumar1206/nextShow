import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NewMovies from "./NewMovies/NewMovies";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewMovies />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
