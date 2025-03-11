import Background from "@/components/animations/background";
import React from "react";

const databases = () => {
  return (
    <div className="h-screen w-screen grid place-items-center">
      <Background />
      <p>Select Your Databases!</p>
      <div>
        <p>SQL Databases</p>
      </div>
    </div>
  );
};

export default databases;
