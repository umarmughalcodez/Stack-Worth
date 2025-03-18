"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import check from "@/public/sign-check.svg";

export default function RatingComponent() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowPopup(false);
      setShowConfirmation(false);
      setRating(0);
      setFeedback("");
    }, 5000);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg shadow-[#333] w-96 text-center">
        {showConfirmation ? (
          <div className="flex flex-col items-center">
            <Image src={check} alt="Check" width={50} height={50} />
            <p className="text-green-600 text-lg mt-2">
              Thanks for your feedback!
            </p>
            <p className="text-lg mt-2">
              If you like this project, Kindly drop a ⭐ on GitHub
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-lg font-semibold mb-4">
              Please Rate Your Experience
            </h2>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <button key={index} onClick={() => setRating(index)}>
                  <svg
                    className={`w-8 h-8 transition-all hover:scale-110 cursor-default ${
                      index <= rating ? "text-red-400" : "text-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                  </svg>
                </button>
              ))}
            </div>
            <textarea
              className="w-full p-2 border rounded-md mt-4 outline-none resize-none"
              rows={3}
              placeholder="Write your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <div className="flex justify-between mt-4">
              <Button
                className="bg-red-400 hover:bg-red-500"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-green-400 hover:bg-green-500"
                onClick={handleSubmit}
                disabled={rating === 0}
              >
                Submit
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
