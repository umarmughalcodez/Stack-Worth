import React from "react";
import { FaHeart } from "react-icons/fa";

const reviews = [
  { id: 1, text: "This really deserves a ⭐" },
  { id: 2, text: "Best experience ever!" },
  { id: 3, text: "Fantastic service! Highly recommended! 🌟" },
  {
    id: 4,
    text: "This tool helped me realize my worth! I negotiated a 20% raise!",
  },
  {
    id: 5,
    text: "Super accurate salary estimates. Helped me plan my next career move",
  },
  { id: 4, text: "Really impressed with the clean UI and functionality! 🔥" },
  { id: 5, text: "Super smooth and user-friendly!" },
  { id: 6, text: "Heaven for beginner developers! 🤩" },
  { id: 7, text: "This app solves a real problem for devs. Well done!" },
  { id: 8, text: "So intuitive and easy to use!" },
  { id: 9, text: "Amazing support and features! 💡" },
  { id: 10, text: "My go-to platform every time! 🚀" },
  { id: 11, text: "Love the simplicity and efficiency of this! ⚡" },
  { id: 12, text: "Shared this with my dev team. Super useful!" },
  { id: 13, text: "Great idea! Looking forward to more features! 📌" },
  { id: 14, text: "The UI 🥶 Hats Off!" },
  { id: 15, text: "This project deserves way more attention! 📢" },
  { id: 16, text: "Contributed a PR! Open source for the win! 🔥" },
];

const LiveScrollingReviews = () => {
  return (
    <div className="overflow-hidden  py-10 w-full mt-10">
      <div className="relative flex whitespace-nowrap animate-scroll">
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            // className="container w-[200px] h-[150px]"
            className="flex items-center justify-center w-[350px] h-auto mx-3 bg-none rounded-lg text-center "

            // className="reviewcard flex flex-col items-center justify-center min-w-[200px] max-w-[300px] mx-5 p-5 h-auto bg-white rounded-lg  hover:shadow-black hover:shadow-lg hover:scale-110 transition-all delay-200"
          >
            {/* <div className=""> */}
            <a className="card1 text-green-400 hover:text-white shadow-black shadow-lg rounded-xl">
              <span className="text-2xl mb-2 flex space-x-2">
                <FaHeart />
                <FaHeart />
                <FaHeart />
                <FaHeart />
                <FaHeart />
              </span>
              <p className="ml-3 text-[14px] text-gray-700 text-center break-words whitespace-normal">
                {review.text}
              </p>
              {/* <h3>This is option 1</h3> */}
              {/* <p className="small">
                  Card description with lots of great facts and interesting
                  details.
                </p> */}
              {/* <div className="go-corner">
                <div className="go-arrow">→</div>
              </div> */}
            </a>
          </div>
          //   </div>
        ))}
      </div>
    </div>
  );
};

export default LiveScrollingReviews;
