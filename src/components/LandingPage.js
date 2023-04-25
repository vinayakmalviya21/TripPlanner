import React from "react";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <About />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
