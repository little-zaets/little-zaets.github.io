import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import SocialLink from "../atoms/SocialLink";

const gIcon = <FontAwesomeIcon icon={faGithub} />;
const lIcon = <FontAwesomeIcon icon={faLinkedinIn} />;

const Footer = () => (
  <footer className="mt-auto">
    <div className="w-full px-4">
      <div className="flex flex-nowrap justify-between items-center p-3 border-t border-gray-200">
        <div className="flex p-0">
          <ul className="flex gap-4 mb-0">
            <li><SocialLink href="https://github.com/little-zaets">{gIcon}</SocialLink></li>
            <li><SocialLink href="https://www.linkedin.com/in/rina-volovich/">{lIcon}</SocialLink></li>
          </ul>
        </div>
        <div className="flex flex-col items-end text-[#555]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
          Made with &hearts; by Rina Volovich 2021
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

