import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Trending from "./components/Trending";
import Genres from "./components/Genres";
import Authors from "./components/Authors";
import Meetup from "./components/Meetup";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Trending />
      <Genres />
      <Authors />
      <Meetup />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
