import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center absolute top-[50%] left-[50%]">
      <span className="loader"></span>
      <span className="mt-5 text-xl">Just a second...</span>
    </div>
  );
};

export default Loader;
