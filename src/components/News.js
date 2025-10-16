"use client";

import React from "react";
import { motion } from "framer-motion";

const newsData = [
  {
    date: "Aug 15, 2022",
    content:
      "A paper titled “Detecting Simpson’s Paradox: A Machine Learning Perspective” has been published in the 33rd International Conference on Database and Expert Systems Applications (Dexa-2022) ✨",
    url: "#",
  },
  {
    date: "Feb 25, 2022",
    content:
      "A paper titled “Towards Unification of Statistical Reasoning, OLAP and ARM” has been published in the 27th International Conference on Database Systems for Advanced Applications (DASFAA-2022) ✨",
    url: "#",
  },
  {
    date: "Jan 12, 2022",
    content:
      "A paper titled “Why Not to Trust Big Data: Discussing Statistical Paradoxes” has been published in the PMDB workshop under DASFAA 2022.",
    url: "#",
  },
];

const News = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white my-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-900 mb-12"
      >
        Latest <span className="text-orange-500">News</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {newsData.map((news, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            className="relative bg-white/70 backdrop-blur-md border border-orange-100 rounded-2xl p-6 shadow-lg hover:shadow-[0_10px_30px_rgba(255,165,0,0.25)] transition-all duration-300"
          >
            {/* Glow Line Top */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 rounded-t-2xl opacity-70"></div>

            {/* Date */}
            <p className="text-sm font-semibold text-orange-600 mb-3 tracking-wide">
              {news.date}
            </p>

            {/* Content */}
            <p className="text-gray-800 leading-relaxed text-[15px] mb-6">
              {news.content}
            </p>

            {/* Button */}
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
            >
              Read More
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                →
              </motion.span>
            </a>

            {/* Animated Border on Hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-400/60 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default News;
