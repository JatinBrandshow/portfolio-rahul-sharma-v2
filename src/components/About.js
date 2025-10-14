"use client";

import React from "react";

const About = () => {
    return (
        <section id="about" className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-white">About Me</h2>
                {/* <p className="text-orange-400 mt-2 text-xl">Tallinn University of Technology</p> */}
            </div>

            {/* Overview (Full Width) */}
            <div className="space-y-6 max-w-5xl mx-auto text-center mb-16">
                <p className="text-gray-300 text-lg leading-relaxed">
                    Rahul Sharma is a dynamic computer science researcher with exceptional communication and writing skills.  
                    Currently, he is an early-stage researcher and doctoral candidate at the Software Science Department, 
                    Information Systems Group, Tallinn University of Technology, Estonia.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                    He is passionate about exploring <strong>association rule mining, machine learning, algorithmic fairness,</strong> 
                    and the <strong>role of statistical paradoxes</strong> in AI, ML, and big data applications. His research broadly includes:
                </p>
                <p className="text-gray-400 italic">
                    "Passionate about leveraging AI for fair, transparent, and trustworthy outcomes."
                </p>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center">
                {/* Research Interests Card */}
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex-1">
                    <h3 className="text-2xl font-bold text-orange-400 mb-4">Research Interests</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Algorithmic fairness and biasness</li>
                        <li>Explainable and Trustworthy AI</li>
                        <li>Statistical paradoxes (e.g., Simpson's Paradox)</li>
                        <li>Causal/confounding effects in ML</li>
                        <li>Machine Learning</li>
                        <li>Generalized Association Rule Mining</li>
                    </ul>
                </div>

                {/* Experience Card */}
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex-1">
                    <h3 className="text-2xl font-bold text-orange-400 mb-4">Experience</h3>
                    <p className="text-gray-300 mb-4">
                        Over twelve years of experience in education, consulting, and independent research.
                    </p>
                    <ul className="space-y-3 text-gray-300">
                        <li>
                            <span className="font-bold text-white">2014 - 2019:</span> Assistant Professor at Ajay Kumar Garg Engineering College, Ghaziabad, India.
                        </li>
                        <li>
                            <span className="font-bold text-white">2015:</span> Founded Big Data Centre of Excellence to expand research and education in new technologies.
                        </li>
                        <li>
                            <span className="font-bold text-white">Present:</span> Early-stage researcher and doctoral candidate at Tallinn University of Technology.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
