import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

const About = (props) => {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          Greetings, my name is Rina. I'm a web developer with experience in
          React, Node JS, Express JS and PostreSQL.
        </p>
        <p>
          My enthusiasm for coding developed as I strived to improve my
          organization’s efficiency and processes in light of new softwares and
          tools that were constantly introduced. By leveraging the priceless
          knowledge I gained from my past experiences, I bring a gapless,
          cross-functional perspective to the development process, rather than
          the common block-scope view.
        </p>
        <p>
          I aspire to combine my operational and technical experience in order to enable an effective development process by
          bridging the gap between my organization's departments.
        </p>

        <p>
          I am constantly working to improve and learn new technologies, and
          welcome any challenge that comes my way.
        </p>
      </Content>
    </div>
  );
}

export default About;
