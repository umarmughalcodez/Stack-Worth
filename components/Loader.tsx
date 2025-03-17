import Image from "next/image";
import React from "react";
import loader from "@/public/-3--unscreen.gif";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-full w-full">
      <Image src={loader} alt="Loading" width={200} height={200} />
    </div>
  );
};

export default Loader;
