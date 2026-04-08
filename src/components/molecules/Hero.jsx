import React from 'react';

const Hero = ({ title, subTitle, content }) => (
  <div className="my-3 text-center">
    <div className="w-full px-4">
      <div className="flex justify-around pt-2">
        <div className="flex flex-col items-center w-full md:w-2/3">
          {title && <h2 className="text-6xl font-bold">{title}</h2>}
          {subTitle && <h3 className="text-4xl font-light mb-2">{subTitle}</h3>}
          {content && <h3 className="text-2xl font-extralight text-gray-500">{content}</h3>}
        </div>
      </div>
    </div>
  </div>
);

export default Hero;

