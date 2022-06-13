import React from "react";
import { Link } from "react-router-dom";

const AppTitle = () => {
  return (
    <div className="absolute w-full top-5 text-center bg-primary text-white text-2xl font-poppins font-bold rounded-xl h-24 flex items-center justify-center">
      <Link to="/">Questions Game Think</Link>
    </div>
  );
};

export default AppTitle;
