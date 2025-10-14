"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-3 bg-[#94451e] rounded-full max-w-7xl mx-auto mt-4 shadow-md">
            {/* Logo / Name */}
            <Link href="/" className="text-white font-semibold text-xl tracking-wide hover:text-orange-400 transition">
                Rahul Sharma
            </Link>

            {/* Menu */}
            <ul className="flex items-center gap-8 text-white text-sm font-medium">
                <li><a href="#about" className="hover:text-orange-400 cursor-pointer transition">About</a></li>
                <li><a href="#skills" className="hover:text-orange-400 cursor-pointer transition">Skills</a></li>
                <li><a href="#news" className="hover:text-orange-400 cursor-pointer transition">News</a></li>
                <li><a href="#publications" className="hover:text-orange-400 cursor-pointer transition">Publications</a></li>
                <li><a href="#projects" className="hover:text-orange-400 cursor-pointer transition">Projects</a></li>
                <li><a href="#experience" className="hover:text-orange-400 cursor-pointer transition">Experience</a></li>
            </ul>

            {/* Button */}
            <button className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-full hover:bg-orange-600 transition">
                Contact
            </button>
        </nav>
    );
};

export default Navbar;
