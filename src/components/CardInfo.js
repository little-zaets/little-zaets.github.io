import React from "react";
import { useSpring, animated } from "react-spring";


const CardInfo = (props) => {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });


  return (
    <animated.div className="g-card-info" style={style}>
      <p className="g-card-title">{props.title}</p>
      <p className="g-card-sub-title">{props.subTitle}</p>
      <a className="link" href={props.link} target="_blank" rel="noopener noreferrer">
        <i> View </i>
      </a>
    </animated.div>
  );
}

export default CardInfo;
