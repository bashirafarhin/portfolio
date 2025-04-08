import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-between gap-[5vw] py-[5vw] px-[4vw] bg-[#f1f1f1]">
      {/* Left Section: Logo & Title */}
      <div className="lg:w-1/2 w-full flex flex-col justify-between">
        <div className="text-[6.5vw] font-bold tracking-tighter leading-none">
          <h1 className="-mb-[1vw]">Bye</h1>
        </div>
        <svg
          width="72"
          height="30"
          viewBox="0 0 72 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Your SVG Paths */}
        </svg>
      </div>

      {/* Right Section: Socials & Email */}
      <div className="lg:w-1/2 w-full flex flex-col gap-6 mt-10 lg:mt-0">
        <div>
          <h2 className="text-xl font-semibold mb-2">Connect with me:</h2>
          <div className="flex flex-col space-y-2 text-lg">
            <h1>
              <a
                className="flex items-center gap-3"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-2xl" /> Instagram
              </a>
            </h1>
            <h1>
              <a
                className="flex items-center gap-3"
                href="https://www.linkedin.com/in/bashirafarhin/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-2xl" /> LinkedIn
              </a>
            </h1>
            <h1>
              <a
                className="flex items-center gap-3"
                href="https://github.com/bashirafarhin"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-2xl" /> GitHub
              </a>
            </h1>
            <h1>
              <a
                className="flex items-center gap-3"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="text-2xl" /> Facebook
              </a>
            </h1>
            <h1>
              <a
                className="flex items-center gap-3"
                href="https://leetcode.com/u/bashirafarhin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode className="text-2xl" /> LeetCode
              </a>
            </h1>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Email me at:</h2>
          <h1>
            <a
              className="flex items-center gap-3 text-lg"
              href="mailto:farhinbashira@gmail.com"
            >
              <FaEnvelope className="text-2xl" /> farhinbashira@gmail.com
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
