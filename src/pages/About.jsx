import React from "react";
import { Hero } from "../components/molecules";
import { Content } from "../components/atoms";
import profile from '../assets/professional.png';

const About = ({ title }) => (
  <div>
    <Hero title={title} />
    <div className="w-full px-4">
      <div className="flex flex-wrap justify-center">
        <div className="flex justify-center w-full md:w-1/4">
          <img src={profile} className="profilepic" alt="Rina Volovich" />
        </div>
        <div className="flex items-center text-center w-full md:w-5/12">
          <p>
            Greetings, my name is Rina.
            <br />
            I'm a web developer with experience in React JS, Node JS, Express JS
            and PostreSQL.
          </p>
        </div>
      </div>
    </div>
    <div>
      <Content>
        <p>
          My enthusiasm for coding developed as I strived to improve my
          organization's efficiency and processes in light of new softwares
          and tools that were constantly introduced. By leveraging the
          priceless knowledge I gained from my past experiences, I bring a
          gapless, cross-functional perspective to the development process,
          rather than the common block-scope view.
        </p>
        <p>
          I aspire to combine my operational and technical experience in order
          to enable an effective development process by bridging the gap
          between my organization's departments.
        </p>
        <p>
          I am constantly working to improve and learn new technologies, and
          welcome any challenge that comes my way.
        </p>
      </Content>
    </div>
  </div>
);

export default About;
