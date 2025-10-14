"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-3 bg-white rounded-full max-w-7xl mx-auto mt-4 shadow-md">
            {/* Logo / Name */}
            <Link
                href="/"
                className="text-gray-900 font-semibold text-xl tracking-wide hover:text-orange-500 transition-colors"
            >
                Rahul Sharma
            </Link>

            {/* Menu */}
            <ul className="flex items-center gap-8 text-gray-700 text-sm font-medium">
                <li>
                    <a
                        href="#about"
                        className="hover:text-orange-500 cursor-pointer transition-colors"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#skills"
                        className="hover:text-orange-500 cursor-pointer transition-colors"
                    >
                        Skills
                    </a>
                </li>
                <li>
                    <a
                        href="#news"
                        className="hover:text-orange-500 cursor-pointer transition-colors"
                    >
                        News
                    </a>
                </li>
                <li>
                    <a
                        href="#publications"
                        className="hover:text-orange-500 cursor-pointer transition-colors"
                    >
                        Publications
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className="hover:text-orange-500 cursor-pointer transition-colors"
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#experience"
                        className="hover:text-orange-500 cursor-pointer transition-colors"
                    >
                        Experience
                    </a>
                </li>
            </ul>

            {/* Contact Button */}
            <button className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-full hover:bg-orange-600 transition-colors shadow">
                Contact
            </button>
        </nav>
    );
};

export default Navbar;
