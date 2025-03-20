import Image from "next/image";
import React from "react";
import loader from "@/public/-3--unscreen.gif";

interface LoaderProps {
  small?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ small }) => {
  return (
    <div className="flex flex-col justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-full w-full">
      {small ? (
        <Image src={loader} alt="Loading" width={100} height={100} />
      ) : (
        <Image src={loader} alt="Loading" width={200} height={200} />
      )}
    </div>
  );
};

export default Loader;
