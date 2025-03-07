"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React from "react";

const App = () => {
  return (
    <div>
      <p>"Find Out Your Developer Worth"</p>
      <Button
        onClick={() => {
          redirect("/dev-type");
        }}
      >
        Let's Check!
      </Button>
    </div>
  );
};

export default App;
