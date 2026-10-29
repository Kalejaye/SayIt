import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import React from "react";
import HeroTrustList from "@/components/HeroTrustList";
import HeroCTA from "@/components/HeroCTA";

const Home = () => {
  return (
    <>
      <main>
        <Hero/>
        <HeroTrustList/>
        <HeroCTA/>
      </main>
    </>
  );
};

export default Home;
