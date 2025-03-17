
"use client";
import { User } from "@/types/User";
import { getSession } from "next-auth/react";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState, useRef } from "react";
import githubUsername from "github-username";
import Ratings from "./Ratings";
import money1 from "@/public/money-with-wings.svg";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/navigation";
import html2canvas from "html2canvas";

interface CardProps {
  worthMsg: string;
  worth: number;
  tip: string;
  icon: StaticImageData;
}

const Card: React.FC<CardProps> = ({ worthMsg, worth, tip, icon }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [gitHubUsername, setGitHubUsername] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [showShareButtons, setShowShareButtons] = useState(true); // Track share buttons visibility

  const fetchUser = async () => {
    const session = await getSession();
    setUser(session?.user as User);
    const fetchedUsername = await githubUsername(
      session?.user?.email as string
    );
    setGitHubUsername(fetchedUsername as string);
  };

  useEffect(() => {
    fetchUser();
    setTimeout(() => {
      setShowPopup(true);
    }, 4500);
  }, []);

  // Save div as image
  const saveAsImage = () => {
    // Hide share buttons before capturing the image

    setShowShareButtons(false);

    if (cardRef.current) {
      html2canvas(cardRef.current).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "developer-worth-card.png";
        link.click();

        // Restore share buttons after saving the image
        setTimeout(() => {
          setShowShareButtons(true);
        }, 3000);
      });
    }
  };

  // Share via WhatsApp
  const shareOnWhatsApp = () => {
    const message = `Check out my Developer Worth! ${window.location.href}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Share via other social media platforms (e.g., Twitter)
  const shareOnSocials = () => {
    const message = `Check out my Developer Worth! ${window.location.href}`;
    const socialUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      message
    )}`;
    window.open(socialUrl, "_blank");
  };

  return (
    <div
      ref={cardRef}
      className="card w-[50%] h-auto rounded-xl border border-black flex flex-col items-center justify-center p-5"
    >
      {user?.image && (
        <Image
          src={user?.image as string}
          alt="User's Image"
          width={120}
          height={120}
          className="rounded-full"
        />
      )}
      <span className="mt-5 mb-3 text-lg">
        <span className="text-green-500 mr-2 font-semibold">
          Congratulations!
        </span>
        @{gitHubUsername}
      </span>
      <p className="text-lg m-3 flex">
        Your Estimated Developer Worth is{" "}
        <span className="text-green-500 font-semibold ml-2 mr-1">
          ${worth.toLocaleString()}
        </span>{" "}
        <Image src={money1} alt="Money" width={20} height={20} />
      </p>

      <p className="text-lg mt-4 mb-4 flex">
        You are a {worthMsg}{" "}
        {icon && (
          <Image
            src={icon}
            alt="Icon"
            width={20}
            height={20}
            className="ml-2"
          />
        )}
      </p>
      <p className="text-lg mb-4 mt-2">
        <span className="text-green-500 font-semibold">Pro Tip:</span> {tip}
      </p>
      {showPopup && <Ratings />}

      {/* Action Buttons */}
      {showShareButtons && (
        <div className="mt-4 flex space-x-4">
          <button
            onClick={saveAsImage}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save as Image
          </button>
          <button
            onClick={shareOnWhatsApp}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Share on WhatsApp
          </button>
          <button
            onClick={shareOnSocials}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Share on Twitter
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
