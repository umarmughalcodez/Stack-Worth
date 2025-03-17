"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const storedPaths = JSON.parse(localStorage.getItem("history") || "[]");

    if (
      storedPaths.length === 0 ||
      storedPaths[storedPaths.length - 1] !== pathname
    ) {
      storedPaths.push(window.location.href);
      localStorage.setItem("history", JSON.stringify(storedPaths));
    }
  }, [pathname]);

  useEffect(() => {
    document.title = "Stack Worth";
    const metaDescription = document.querySelector(
      "meta[name='Calculate Your Developer Worth!']"
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "This is the description of my website."
      );
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "This is the description of my website.";
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" />

      <body className={`${montserrat.variable} antialiased font-normal`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
