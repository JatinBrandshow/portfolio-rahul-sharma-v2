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
        <section id="news" className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl my-8">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center text-white mb-10"
            >
                Latest <span className="text-orange-400">News</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsData.map((news, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="relative group bg-gray-800/80 border border-gray-700 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(255,165,0,0.4)]"
                    >
                        {/* Date */}
                        <p className="text-sm text-orange-400 font-semibold mb-2">{news.date}</p>

                        {/* Content */}
                        <p className="text-gray-300 leading-relaxed mb-4">{news.content}</p>

                        {/* Read More Button */}
                        {news.url && (
                            <a
                                href={news.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-2 px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow hover:shadow-[0_0_10px_rgba(255,165,0,0.4)]"
                            >
                                Read More →
                            </a>
                        )}

                        {/* Glow Accent */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/0 via-transparent to-orange-400/0 group-hover:from-orange-500/10 transition-all duration-300 pointer-events-none"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default News;
