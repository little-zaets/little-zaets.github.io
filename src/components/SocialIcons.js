import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const gIcon = <FontAwesomeIcon icon={faGithub} />;
const lIcon = <FontAwesomeIcon icon={faLinkedinIn} />;

const SocialIcons = () => {
    return (
      <div className="social mt-4">
				<ul className="d-flex justify-content-center">
					<li className="list-inline-item li-icon">
	        	<a className="link" href="/files/resume-final.pdf" download>
	          	<span type="button" className="link--icon text-custom">
	            CV
	          	</span>
	        	</a>
					</li>
	          <li className="list-inline-item">
	            <a
	              href="https://github.com/little-zaets"
	              className="link link--icon"
	              target="_blank"
	            >
	              {gIcon}
	            </a>
	          </li>
	          <li className="list-inline-item li-icon">
	            <a
	              href="https://www.linkedin.com/in/rina-volovich/"
	              className="link link--icon"
	              target="_blank"
	            >
	              {lIcon}
	            </a>
	          </li>
					</ul>
			</div>
    );
}
	
export default SocialIcons;
