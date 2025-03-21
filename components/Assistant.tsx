"use client";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

const Assistant = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 sm:bottom-10 right-6 sm:right-10 flex items-center gap-2 z-[9999]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`bg-gray-400 text-white text-base px-3 py-1 rounded-lg shadow-lg transition-all duration-300 ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        Need Help?
      </div>

      {/* Floating Button */}
      <Link
        href="/chat"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-opacity-85 transition duration-300"
      >
        <MessageCircle size={24} />
      </Link>
    </div>
  );
};

export default Assistant;
