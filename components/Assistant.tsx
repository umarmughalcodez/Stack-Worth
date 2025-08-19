"use client";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const Assistant = () => {
  return (
    <div className="fixed bottom-6 sm:bottom-10 right-6 sm:right-10 flex items-center gap-2 z-[9999]">
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
