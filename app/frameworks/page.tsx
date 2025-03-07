"use client";
import { Button } from "@/components/ui/button";
import { redirect, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Frameworks = () => {
  const searchParams = useSearchParams();
  const languages = searchParams
    .getAll("languages")
    .flatMap((lang) => lang.split(", "));
  console.log(languages);
  const dev = searchParams.get("dev");
  let language = languages.join(", ");

  const [selectedFrameworks, setselectedFrameworks] = useState<string[]>([]);
  const [showFrameworks, setShowFrameworks] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    let updatedOptions = [...selectedFrameworks];

    if (checked) {
      updatedOptions.push(value);
    } else {
      updatedOptions = updatedOptions.filter((option) => option !== value);
    }

    setselectedFrameworks([...new Set(updatedOptions)]);
  };

  useEffect(() => {
    if (
      dev === "front-end" &&
      !languages.includes("JS") &&
      !languages.includes("TS")
    ) {
      const url = `/experience?languages=${encodeURIComponent(
        language
      )}&frameworks=none`;
      redirect(url);
    }
    if (
      dev === "full-stack" &&
      !languages.includes("JS") &&
      !languages.includes("TS")
    ) {
      setShowFrameworks(false);
    }
  }, [languages, dev]);

  const handleRedirect = () => {
    let language = languages.join(", ");
    let frameworks = selectedFrameworks.join(", ");

    const url = `/experience?languages=${encodeURIComponent(
      language
    )}&frameworks=${encodeURIComponent(frameworks)}&dev=${dev}`;
    redirect(url);
  };

  return (
    <div>
      <p>Select Frameworks & Libraries</p>
      {(dev === "full-stack" || dev === "front-end") && showFrameworks && (
        <div>
          <p>Select Front End Frameworks</p>
          <label>
            <input
              type="checkbox"
              value="React.js"
              onChange={handleChange}
              checked={selectedFrameworks.includes("React.js")}
            />
            React.js
          </label>
          <label>
            <input
              type="checkbox"
              value="Next.js"
              onChange={handleChange}
              checked={selectedFrameworks.includes("Next.js")}
            />
            Next.js
          </label>
          <label>
            <input
              type="checkbox"
              value="Vue.js"
              onChange={handleChange}
              checked={selectedFrameworks.includes("Vue.js")}
            />
            Vue.js
          </label>
          <label>
            <input
              type="checkbox"
              value="Angular"
              onChange={handleChange}
              checked={selectedFrameworks.includes("Angular")}
            />
            Angular
          </label>
          <label>
            <input
              type="checkbox"
              value="Svelte"
              onChange={handleChange}
              checked={selectedFrameworks.includes("Svelte")}
            />
            Svelte
          </label>
          <label>
            <input
              type="checkbox"
              value="JQuery"
              onChange={handleChange}
              checked={selectedFrameworks.includes("JQuery")}
            />
            JQuery
          </label>
        </div>
      )}
      {(dev === "full-stack" || dev === "back-end") && (
        <div>
          <p>Select Back End Frameworks</p>
          {languages.includes("python") && (
            <label>
              <input
                type="checkbox"
                value="Django"
                onChange={handleChange}
                checked={selectedFrameworks.includes("Django")}
              />
              Django
            </label>
          )}
          {languages.includes("Node.js") && (
            <label>
              <input
                type="checkbox"
                value="Express.js"
                onChange={handleChange}
                checked={selectedFrameworks.includes("Express.js")}
              />
              Express.js
            </label>
          )}
          {languages.includes("Python") && (
            <label>
              <input
                type="checkbox"
                value="Flask"
                onChange={handleChange}
                checked={selectedFrameworks.includes("Flask")}
              />
              Flask
            </label>
          )}

          {languages.includes("PHP") && (
            <label>
              <input
                type="checkbox"
                value="Laravel"
                onChange={handleChange}
                checked={selectedFrameworks.includes("Laravel")}
              />
              Laravel
            </label>
          )}
          {languages.includes("Java") && (
            <label>
              <input
                type="checkbox"
                value="Spring Boot"
                onChange={handleChange}
                checked={selectedFrameworks.includes("Spring Boot")}
              />
              Spring Boot
            </label>
          )}
          {languages.includes("C#") && (
            <label>
              <input
                type="checkbox"
                value="ASP.NET"
                onChange={handleChange}
                checked={selectedFrameworks.includes("ASP.NET")}
              />
              ASP.NET
            </label>
          )}
          {languages.includes("Ruby") && (
            <label>
              <input
                type="checkbox"
                value="Ruby on Rails"
                onChange={handleChange}
                checked={selectedFrameworks.includes("Ruby on Rails")}
              />
              Ruby on Rails
            </label>
          )}
        </div>
      )}

      <Button onClick={handleRedirect}>Next</Button>
    </div>
  );
};

export default Frameworks;
