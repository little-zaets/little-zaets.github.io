import React from "react";

const SocialLink = ({ href, children }) => (
  <a href={href} className="link link--icon" target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default SocialLink;
