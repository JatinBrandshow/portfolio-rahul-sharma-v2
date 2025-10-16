"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaChartLine, FaRobot, FaNetworkWired, FaProjectDiagram } from "react-icons/fa";

const About = () => {
  const interests = [
    { icon: <FaBrain className="text-blue-900 w-5 h-5" />, label: "Algorithmic fairness and biasness" },
    { icon: <FaRobot className="text-blue-900 w-5 h-5" />, label: "Explainable and Trustworthy AI" },
    { icon: <FaChartLine className="text-blue-900 w-5 h-5" />, label: "Statistical paradoxes (e.g., Simpson's Paradox)" },
    { icon: <FaNetworkWired className="text-blue-900 w-5 h-5" />, label: "Causal/confounding effects in ML" },
    { icon: <FaBrain className="text-blue-900 w-5 h-5" />, label: "Machine Learning" },
    { icon: <FaProjectDiagram className="text-blue-900 w-5 h-5" />, label: "Generalized Association Rule Mining" },
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3"
      >
        <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
        <p className="text-blue-900 text-xl">Tallinn University of Technology</p>
      </motion.div>

      {/* Overview */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center space-y-6"
      >
        <p className="text-gray-700 text-lg leading-relaxed">
          Rahul Sharma is a dynamic computer science researcher with exceptional communication and writing skills.  
          Currently, he is an early-stage researcher and doctoral candidate at the Software Science Department, 
          Information Systems Group, Tallinn University of Technology, Estonia.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          He is passionate about exploring <strong className="text-gray-900">association rule mining, machine learning, algorithmic fairness,</strong> 
          and the <strong className="text-gray-900">role of statistical paradoxes</strong> in AI, ML, and big data applications. His research broadly includes:
        </p>
        <p className="text-gray-500 italic text-lg relative before:absolute before:-left-6 before:top-0 before:w-1 before:h-full before:bg-blue-900 pl-6">
          "Passionate about leveraging AI for fair, transparent, and trustworthy outcomes."
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Research Interests</h3>
          <ul className="space-y-3 text-gray-700">
            {interests.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                {item.icon}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Experience</h3>
          <p className="text-gray-700 mb-4">
            Over twelve years of experience in education, consulting, and independent research.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-bold text-gray-900">2014 - 2019:</span> Assistant Professor at Ajay Kumar Garg Engineering College, Ghaziabad, India.
            </li>
            <li>
              <span className="font-bold text-gray-900">2015:</span> Founded Big Data Centre of Excellence to expand research and education in new technologies.
            </li>
            <li>
              <span className="font-bold text-gray-900">Present:</span> Early-stage researcher and doctoral candidate at Tallinn University of Technology.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
