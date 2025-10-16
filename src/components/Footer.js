"use client";

import React from "react";
import {
  Mail,
  Github,
  Twitter,
  Briefcase,
  Landmark,
  GraduationCap,
  Network,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white py-10 border-t border-gray-800">
      {/* Social Icons */}
      <div className="flex justify-center gap-8 mb-4">
        {/* Email */}
        <a
          href="mailto:rahul.sharma@taltech.ee"
          title="Email"
          className="hover:text-[var(--accent)] transition"
          aria-label="Email"
        >
          <Mail size={32} />
        </a>

        {/* ORCID */}
        <a
          href="https://orcid.org/0000-0002-9024-8768"
          title="ORCID"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--accent)] transition"
          aria-label="ORCID"
        >
          <Landmark size={32} />
        </a>

        {/* Google Scholar */}
        <a
          href="https://scholar.google.com/citations?user=ArBlXxUAAAAJ"
          title="Google Scholar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--accent)] transition"
          aria-label="Google Scholar"
        >
          <GraduationCap size={32} />
        </a>

        {/* ResearchGate */}
        <a
          href="https://www.researchgate.net/profile/Rahul-Sharma-162/"
          title="ResearchGate"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--accent)] transition"
          aria-label="ResearchGate"
        >
          <Network size={32} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rahul-sharmaa"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--accent)] transition"
          aria-label="GitHub"
        >
          <Github size={32} />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/ItsdrRahul"
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--accent)] transition"
          aria-label="Twitter"
        >
          <Twitter size={32} />
        </a>

        {/* Portfolio / Work */}
        <a
          href="https://taltech.ee/kontaktid/rahul-sharma"
          title="Work"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--accent)] transition"
          aria-label="Portfolio"
        >
          <Briefcase size={32} />
        </a>
      </div>

      {/* Personal Email */}
      <p className="text-center text-sm mb-4">
        You can also write to me on my personal email at{" "}
        <a
          href="mailto:rahul.sharma@taltech.ee"
          className="text-[var(--accent)] hover:underline transition"
        >
          rahul.sharma@taltech.ee
        </a>
      </p>

      {/* Bottom credit line */}
      <div className="text-center text-xs text-gray-400 border-t border-gray-800 pt-4">
        Designed & Developed by{" "}
        <a
          href="https://brandshow.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:underline transition"
        >
          Brandshow
        </a>
      </div>
    </footer>
  );
};

export default Footer;
