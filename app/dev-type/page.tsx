"use client";
import { Button } from "@/components/ui/button";
import { setSelectedOptions } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DeveloperType = () => {
  const [showFullStackMsg, setShowFullStackMsg] = useState(false);
  const dispatch = useDispatch();
  const selectedOptions = useSelector(
    (state: RootState) => state.user.selectedOptions
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    let updatedOptions = [...selectedOptions];

    if (checked) {
      updatedOptions.push(value);
      if (value === "Full Stack Developer") {
        updatedOptions = [
          "Front End Developer",
          "Back End Developer",
          "Full Stack Developer",
        ];
      } else if (
        updatedOptions.includes("Front End Developer") &&
        updatedOptions.includes("Back End Developer")
      ) {
        updatedOptions.push("Full Stack Developer");
      }
    } else {
      updatedOptions = updatedOptions.filter((option) => option !== value);
      if (value === "Full Stack Developer") {
        updatedOptions = updatedOptions.filter(
          (option) =>
            option !== "Front End Developer" && option !== "Back End Developer"
        );
      } else {
        updatedOptions = updatedOptions.filter(
          (option) => option !== "Full Stack Developer"
        );
      }
    }

    if (
      updatedOptions.includes("Front End Developer") &&
      updatedOptions.includes("Back End Developer")
    ) {
      setShowFullStackMsg(true);
    } else {
      setShowFullStackMsg(false);
    }

    dispatch(setSelectedOptions([...new Set(updatedOptions)]));
  };

  const handleRedirect = () => {
    if (selectedOptions.includes("Full Stack Developer")) {
      redirect("/full-stack");
    } else if (selectedOptions.includes("Front End Developer")) {
      redirect("/front-end");
    } else if (selectedOptions.includes("Back End Developer")) {
      redirect("/back-end");
    }
  };

  return (
    <div>
      <p>What Type Of Developer Are You?</p>
      <br />
      <label>
        <input
          name="Front End Developer"
          type="checkbox"
          value="Front End Developer"
          checked={selectedOptions.includes("Front End Developer")}
          onChange={handleChange}
        />
        Front End Developer
      </label>
      <br />
      <label>
        <input
          name="Back End Developer"
          type="checkbox"
          value="Back End Developer"
          checked={selectedOptions.includes("Back End Developer")}
          onChange={handleChange}
        />
        Back End Developer
      </label>
      {showFullStackMsg && <p>Looks Like you are a Full Stack Developer!</p>}
      <label>
        <input
          type="checkbox"
          value="Full Stack Developer"
          checked={selectedOptions.includes("Full Stack Developer")}
          onChange={handleChange}
        />
        Full Stack Developer
      </label>

      {selectedOptions.length <= 0 ? (
        <Button disabled={true}>Please Select at least one option</Button>
      ) : (
        <Button onClick={handleRedirect}>Proceed</Button>
      )}
    </div>
  );
};

export default DeveloperType;
