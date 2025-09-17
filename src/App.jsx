import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Process from "./components/Process";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./components/Admin"; // optional admin page

function HomePage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <Hero />
        <div className="container">
          <Services />
          <WhyChoose />
          <Process />
          <About />
          <Portfolio />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
