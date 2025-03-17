// import Image from "next/image";
// import React from "react";
// import money1 from "@/public/money-with-wings.svg";
// import programmer from "@/public/programmer (1).png";
// import demo from "@/public/smiling-face-with-sunglasses.svg";
// import money from "@/public/money-with-wings (1).svg";

// const DemoCard = () => {
//   return (
//     <div className="w-full h-auto flex md:flex-col relative z-20 mt-10">
//       <div className="w-[50%]">
//         <div className="flex flex-col items-center justify-center  text-center w-full p-20 h-full space-y-5 text-xl">
//           <span className="font-semibold text-2xl">
//             Calculate your{" "}
//             <span className="text-green-500">Developer Worth</span> now and know
//             how much is your value in tech Industry
//           </span>
//         </div>
//       </div>
//       <div className="w-[50%] grid place-items-center p-7">
//         <div className="card w-[70%] h-auto rounded-xl border border-black flex flex-col items-center justify-center p-5">
//           {/* {user?.image && ( */}
//           <Image
//             src={demo}
//             alt="User's Image"
//             width={120}
//             height={120}
//             className="rounded-full"
//           />
//           {/* )} */}
//           <span className="mt-5 mb-3 text-lg">
//             <span className="text-green-500 mr-2 font-semibold">
//               Congratulations!
//             </span>
//             @johndoe
//             {/* {user?.name} */}
//           </span>
//           <p className="text-lg m-3 flex font-normal">
//             Your Estimated Developer Worth is{" "}
//             <span className="text-green-500 font-semibold ml-2 mr-1">
//               $324,500.788
//             </span>{" "}
//             {/* <Image src={money} alt="Money" width={20} height={20} /> */}
//             <Image src={money1} alt="Money" width={20} height={20} />
//           </p>

//           <p className="text-lg mt-4 mb-4 flex font-normal">
//             You are a Senior Developer{" "}
//             {programmer && (
//               <Image
//                 src={programmer}
//                 alt="Icon"
//                 width={20}
//                 height={20}
//                 className="ml-2"
//               />
//             )}
//           </p>
//           <p className="text-lg mb-4 mt-2 font-normal">
//             <span className="text-green-500 font-semibold">Pro Tip:</span>{" "}
//             <span>Mentor junior developers and share your knowledge</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DemoCard;

import Image from "next/image";
import React from "react";
import money1 from "@/public/money-with-wings.svg";
import programmer from "@/public/programmer (1).png";
import demo from "@/public/smiling-face-with-sunglasses.svg";
import money from "@/public/money-with-wings (1).svg";

const DemoCard = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row relative z-20 mt-10">
      {/* First Div */}
      <div className="w-full md:w-[50%]">
        <div className="flex flex-col items-center justify-center text-center w-full p-20 h-full space-y-5 text-xl">
          <span className="font-semibold text-2xl">
            Calculate your{" "}
            <span className="text-green-500">Developer Worth</span> now and know
            how much is your value in the tech Industry
          </span>
        </div>
      </div>

      {/* Second Div */}
      <div className="w-full md:w-[50%] grid place-items-center p-7">
        <div className="card w-[70%] h-auto rounded-xl border border-black flex flex-col items-center justify-center p-5">
          {/* {user?.image && ( */}
          <Image
            src={demo}
            alt="User's Image"
            width={120}
            height={120}
            className="rounded-full"
          />
          {/* )} */}
          <span className="mt-5 mb-3 text-lg">
            <span className="text-green-500 mr-2 font-semibold">
              Congratulations!
            </span>
            @johndoe
            {/* {user?.name} */}
          </span>
          <p className="text-lg m-3 flex font-normal">
            Your Estimated Developer Worth is{" "}
            <span className="text-green-500 font-semibold ml-2 mr-1">
              $324,500.788
            </span>{" "}
            {/* <Image src={money} alt="Money" width={20} height={20} /> */}
            <Image src={money1} alt="Money" width={20} height={20} />
          </p>

          <p className="text-lg mt-4 mb-4 flex font-normal">
            You are a Senior Developer{" "}
            {programmer && (
              <Image
                src={programmer}
                alt="Icon"
                width={20}
                height={20}
                className="ml-2"
              />
            )}
          </p>
          <p className="text-lg mb-4 mt-2 font-normal">
            <span className="text-green-500 font-semibold">Pro Tip:</span>{" "}
            <span>Mentor junior developers and share your knowledge</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
