import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

const About = (props) => {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          Greetings, my name is Rina. I'm a web developer with experience
          in React, Node JS, Express JS and PostreSQL. 
        </p>

        <p>
          I aspire to combine my operational and technical experiece in order to be an effective Product Manager.
        </p>

        <p>
          I am constantly working to improve and learn new technologies, and welcome any challenge that comes my way.
        </p>

        <p>
          My latest project, Dev Grub, is a cookbook for developers. You can
          check it out{" "}
          <a
            href="https://devgrub.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          , or on the homepage. It is built with Angular, MongoDB, Express JS,
          and Node JS. However, I will be rebuilding it using React in the
          coming months
        </p>

        <p>
          When I'm not learning something new chances are I'm creating some
          YouTube videos. You can find those{" "}
          <a
            href="http://www.youtube.com/c/GarrettLove1"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
      </Content>
    </div>
  );
}

export default About;
