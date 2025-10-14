import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/NavBar";
import News from "@/components/News";
import Publications from "@/components/Publications";
import React from "react";

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <About />
            <News />
            <Publications />
        </div>
    );
};

export default HomePage;
