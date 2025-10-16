"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-3 bg-white rounded-full max-w-7xl mx-auto mt-4 shadow-md">
      {/* Logo / Name */}
      <Link
        href="/"
        className="text-blue-700 font-semibold text-xl tracking-wide hover:text-blue-900 transition-colors"
      >
        Rahul Sharma
      </Link>

      {/* Menu */}
      <ul className="flex items-center gap-8 text-blue-700 text-base font-medium">
        <li>
          <a
            href="#about"
            className="hover:text-blue-900 cursor-pointer transition-colors"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="hover:text-blue-900 cursor-pointer transition-colors"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#news"
            className="hover:text-blue-900 cursor-pointer transition-colors"
          >
            News
          </a>
        </li>
        <li>
          <a
            href="#publications"
            className="hover:text-blue-900 cursor-pointer transition-colors"
          >
            Publications
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-blue-900 cursor-pointer transition-colors"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="hover:text-blue-900 cursor-pointer transition-colors"
          >
            Experience
          </a>
        </li>
      </ul>

      {/* Contact Button */}
      <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded-full hover:bg-blue-800 transition-colors shadow">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
