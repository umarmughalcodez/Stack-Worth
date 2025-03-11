"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const PageTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    sessionStorage.setItem("previousPage", pathname);
  }, [pathname]);

  return null;
};

export default PageTracker;
