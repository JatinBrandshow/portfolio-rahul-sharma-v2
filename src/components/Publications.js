"use client";

import { publications } from "@/app/Json/PublicationsData";
import React from "react";
import { motion } from "framer-motion";

const Publications = () => {
  return (
    <section
      id="publications"
      className="relative max-w-6xl mx-auto px-6 py-20 overflow-hidden bg-white"
    >
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-20 relative z-10">
        Publications
      </h2>

      <div className="space-y-20 relative z-10">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -80 : 80,
              rotate: index % 2 === 0 ? -2 : 2,
            }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8`}
          >
            {/* Year section with gradient badge */}
            <div className="flex flex-col items-center justify-center text-center md:w-1/5">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-white text-sm font-bold px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 shadow-md"
              >
                {pub.year}
              </motion.span>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "80px" }}
                transition={{ duration: 0.6 }}
                className="w-[2px] bg-gradient-to-b from-orange-400 to-transparent mt-4"
              ></motion.div>
            </div>

            {/* Main publication details */}
            <div className="md:w-4/5 space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold leading-snug hover:text-orange-600 transition-colors duration-300">
                {pub.title}
              </h3>
              <p className="text-gray-600 italic text-sm">{pub.authors}</p>
              <p className="text-orange-700 font-medium">{pub.journal}</p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="text-gray-700 mt-2 text-sm md:text-base leading-relaxed"
              >
                {pub.description || "No abstract available."}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle glowing underline at the bottom */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 via-pink-500 to-transparent origin-left"
      ></motion.div>
    </section>
  );
};

export default Publications;
