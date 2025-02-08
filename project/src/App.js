import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import AppHeader from "./components/Header";
import Hero from "./components/Hero";
import VideoGrid from "./components/VideoGrid";
import MusicCarousel from "./components/MusicCarousel";
import NoteBook from "./components/NoteBook";
import BlogPosts from "./components/BlogPosts";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import CustomFooter from "./components/Footer";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import SearchImages from "./pages/SearchImages";
import ShoppingComponent from "./pages/ShoopingComponent";
import "antd/dist/reset.css";

const App = () => {
  return (
    <Router>
      <div>
        <AppHeader />
        <Routes>
          {/* Main Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <VideoGrid />
                <MusicCarousel />
                <NoteBook />
                <BlogPosts />
                <Gallery />
                <AboutUs />
                <FAQ />
              </>
            }
          />
          {/* Service Page */}
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/SearchImages" element={<SearchImages />} />
          <Route path="/shopping" element={<ShoppingComponent />} />
        </Routes>
        <CustomFooter />
      </div>
    </Router>
  );
};

export default App;
