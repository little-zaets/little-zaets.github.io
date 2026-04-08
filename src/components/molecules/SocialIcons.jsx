import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import SocialLink from "../atoms/SocialLink";

const gIcon = <FontAwesomeIcon icon={faGithub} />;
const lIcon = <FontAwesomeIcon icon={faLinkedinIn} />;

const SocialIcons = () => (
  <div className="mt-4">
    <ul className="flex justify-center">
      <li className="pr-5 text-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <a className="link" href="/files/resume-final.pdf" download>
          <span className="link--icon" style={{ fontFamily: "'Poppins', sans-serif" }}>CV</span>
        </a>
      </li>
      <li className="pr-5 text-2xl">
        <SocialLink href="https://github.com/little-zaets">{gIcon}</SocialLink>
      </li>
      <li className="pr-5 text-2xl">
        <SocialLink href="https://www.linkedin.com/in/rina-volovich/">{lIcon}</SocialLink>
      </li>
    </ul>
  </div>
);

export default SocialIcons;

