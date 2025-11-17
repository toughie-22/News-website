// src/components/Spinner.jsx
import React from "react";
import placeholder from "../assets/placeholder.jpg"; // use your existing image

const Spinner = () => {
  return (
    <div className="text-center my-5">
      <img src={placeholder} alt="Loading..." width={80} />
    </div>
  );
};

export default Spinner;
