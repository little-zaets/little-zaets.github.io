import React from "react";

const SubmitButton = ({ disabled, children }) => (
  <button
    className="inline-block px-4 btn btn--outline"
    type="submit"
    disabled={disabled}
  >
    {children}
  </button>
);

export default SubmitButton;
