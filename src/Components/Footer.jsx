import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./Footer.css";

const socialLinks = [
  {
    href: "https://instagram.com",
    icon: <FaInstagram className="icon" style={{ color: "#E4405F" }} />,
  },
  {
    href: "https://www.linkedin.com/in/bashirafarhin/",
    icon: <FaLinkedin className="icon" style={{ color: "#0077B5" }} />,
  },
  {
    href: "https://github.com/bashirafarhin",
    icon: <FaGithub className="icon" style={{ color: "#333" }} />,
  },
  {
    href: "https://facebook.com",
    icon: <FaFacebook className="icon" style={{ color: "#1877F2" }} />,
  },
  // {
  //   href: "https://leetcode.com/u/bashirafarhin/",
  //   icon: <SiLeetcode className="icon" style={{ color: "#FFA116" }} />,
  // },
  {
    href: "mailto:farhinbashira@gmail.com",
    icon: <FaEnvelope className="icon" style={{ color: "#1DA1F2" }} />,
  },
];

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1 className="footer-title">Bye</h1>
      </div>

      <div className="footer-right">
        <div className="footer-socials">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noreferrer">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
