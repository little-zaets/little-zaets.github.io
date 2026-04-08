import React from "react";

const Content = ({ children }) => (
  <div className="w-full">
    <div className="flex justify-center">
      <div className="w-full md:w-2/3 px-2">{children}</div>
    </div>
  </div>
);

export default Content;

