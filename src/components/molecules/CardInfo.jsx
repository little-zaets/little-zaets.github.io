import React from "react";
import { useSpring, animated } from "react-spring";

const CardInfo = ({ title, subTitle, link }) => {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="g-card-info" style={style}>
      <p className="g-card-title">{title}</p>
      <p className="g-card-sub-title">{subTitle}</p>
      <a className="link" href={link} target="_blank" rel="noopener noreferrer">
        <i> View </i>
      </a>
    </animated.div>
  );
};

export default CardInfo;

