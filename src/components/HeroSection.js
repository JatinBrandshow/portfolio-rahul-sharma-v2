"use client";

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-12">
      {/* Left Panel */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center lg:w-1/3 text-center p-6 rounded-2xl border border-gray-200 hover:scale-105 transition-transform duration-300"
      >
        <div className="relative w-64 h-64">
          <Image
            src="/image/rahul.webp"
            alt="Rahul Sharma"
            fill
            className="rounded-full object-cover border-4 border-orange-500"
          />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-gray-900">Rahul Sharma</h2>
        <p className="text-gray-600 mt-1">
          <a
            href="https://www.taltech.ee/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors duration-300 font-medium"
          >
            Tallinn University of Technology
          </a>
        </p>

        {/* Social Links */}
        <div className="flex gap-5 mt-6 justify-center">
          {["FB", "X", "LinkedIn", "GitHub"].map((platform) => (
            <motion.a
              key={platform}
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-500 hover:text-orange-500 transition-colors duration-300 text-lg font-semibold"
            >
              {platform}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right Panel */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-2/3 flex flex-col justify-center gap-6 p-8 rounded-2xl border border-gray-200 hover:scale-105 transition-transform duration-300"
      >
        <p className="text-gray-600 text-lg">Welcome to my personal portfolio</p>

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 space-y-4 text-lg leading-relaxed max-h-[400px] overflow-y-auto"
        >
          <p>
            Passionate about computer science and cutting-edge research, I specialize in{" "}
            <strong className="text-gray-900">
              association rule mining, machine learning, and algorithmic fairness
            </strong>. This portfolio showcases my projects, publications, and contributions to the field.
          </p>
          <p>
            Always eager to explore new technologies, solve complex problems, and collaborate with the global research community.
          </p>
        </motion.div>
      </motion.div>

      {/* Optional: subtle background shapes */}
      <div className="absolute -z-10 w-60 h-60 bg-orange-100 rounded-full top-12 right-10 blur-3xl"></div>
      <div className="absolute -z-10 w-48 h-48 bg-pink-100 rounded-full bottom-0 left-0 blur-2xl"></div>
    </section>
  );
};

export default HeroSection;
