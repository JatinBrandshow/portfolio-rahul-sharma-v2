"use client";

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">
            {/* Left Panel */}
            <div className="flex flex-col items-center lg:w-1/3 text-center p-6 rounded-xl bg-gray-900 bg-opacity-60 shadow-[0_4px_30px_rgba(255,165,0,0.5)]">
                <div className="relative w-64 h-64">
                    <Image
                        src="/image/rahul.webp"
                        alt="Rahul Sharma"
                        fill
                        className="rounded-full object-cover border-4 border-orange-500"
                    />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-white">Rahul Sharma</h2>
                <p className="text-gray-400 mt-1">
                    <a
                        href="https://www.taltech.ee/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500 transition"
                    >
                        Tallinn University of Technology
                    </a>
                </p>

                {/* Social Links */}
                <div className="flex gap-4 mt-4 justify-center">
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                        FB
                    </a>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                        X
                    </a>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                        LinkedIn
                    </a>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                        GitHub
                    </a>
                </div>
            </div>

            {/* Right Panel */}
            <div className="lg:w-2/3 flex flex-col justify-center gap-4 p-6 rounded-xl bg-gray-900 bg-opacity-60 shadow-[0_4px_30px_rgba(255,165,0,0.5)]">
                <p className="text-gray-400">Welcome to my personal portfolio</p>

                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                    I'm{" "}
                    <span className="text-orange-500">
                        <Typewriter
                            words={["Rahul Sharma", "a Dynamic CS Researcher"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </span>
                </h1>

                {/* New About Section */}
                <div className="text-gray-300 space-y-4 max-h-[500px] overflow-y-auto">
                    <p>
                        Passionate about computer science and cutting-edge research, I specialize in association rule mining, machine learning, and algorithmic fairness. This portfolio showcases my projects, publications, and contributions to the field.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
