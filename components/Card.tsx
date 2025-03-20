"use client";
import { User } from "@/types/User";
import { getSession } from "next-auth/react";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState, useRef } from "react";
import githubUsername from "github-username";
import money1 from "@/public/money-with-wings.svg";
import html2canvas from "html2canvas";
import { Button } from "./ui/button";
import { SiWhatsapp } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import RatingComponent from "./Ratings";

interface CardProps {
  worthMsg: string;
  worth: number;
  tip: string;
  icon: StaticImageData;
}

const Card: React.FC<CardProps> = ({ worthMsg, worth, tip, icon }) => {
  const [user, setUser] = useState<User | null>(null);
  const [gitHubUsername, setGitHubUsername] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const fetchUser = async () => {
    const session = await getSession();
    setUser(session?.user as User);
    if (!session?.user?.email) return;
    try {
      const fetchedUsername = await githubUsername(
        session?.user?.email as string
      );
      if (fetchedUsername) {
        setGitHubUsername((fetchedUsername as string) ?? null);
      } else {
        setGitHubUsername(null);
      }
    } catch (error) {
      console.log("Error Fetching Username", error);
      setGitHubUsername(null);
    }
  };

  useEffect(() => {
    fetchUser();
    setTimeout(() => {
      setShowPopup(true);
    }, 4500);
  }, []);

  const saveAsImage = () => {
    if (cardRef.current) {
      html2canvas(cardRef.current).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "developer-worth-card.png";
        link.click();
      });
    }
  };

  const shareOnWhatsApp = () => {
    const message = `Hey, check out my Developer Worth! ${window.location.href}`;
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
      className="card rounded-xl border border-black flex flex-col items-center justify-center p-5 hover:buttons-visible"
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

      {gitHubUsername ? (
        <span className="mt-5 mb-3 text-lg">
          <span className="text-green-500 mr-2 font-semibold text-lg">
            Congratulations!
          </span>
          @{gitHubUsername}
        </span>
      ) : (
        <span className="text-green-500 mr-2 font-semibold text-lg">
          Congratulations!
        </span>
      )}

      <p className="text-lg m-3 flex items-center justify-center break-words w-[80%]">
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
      {showPopup && <RatingComponent />}

      <div className="mt-4 flex space-x-4 buttons-hidden">
        <Button
          onClick={saveAsImage}
          effect={"shineHover"}
          className="bg-red-500 hover:bg-opacity-80 text-white px-4 py-2 rounded flex items-center justify-center  hover:scale-105 transition-all delay-75"
        >
          Save as{" "}
          <span>
            <FaImage />
          </span>
        </Button>
        <Button
          effect={"shineHover"}
          onClick={shareOnWhatsApp}
          className="bg-green-500 text-white rounded hover:bg-opacity-80 flex items-center justify-center  hover:scale-105 transition-all delay-75"
        >
          Share on {/* <span> */}
          <SiWhatsapp />
          {/* </span> */}
        </Button>
        <Button
          onClick={shareOnSocials}
          effect={"shineHover"}
          className="bg-[#222] text-white px-4 py-2 rounded hover:bg-opacity-80 flex items-center justify-center hover:scale-105 transition-all delay-75"
        >
          Share on
          <span>
            <FaXTwitter />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Card;
