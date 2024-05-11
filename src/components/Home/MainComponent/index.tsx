"use client";

import Photos from "../Photos";
import Header from "../Header";
import MainButtonLink from "../../commons/MainButtonLink";

import { useState } from "react";

export default function MainComponent() {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div
        className={`mb-4 max-w-[750px] w-3/4 min-w-[380px] transition-all ${
          isHover ? "animated-paw" : ""
        }`}
      >
        <Photos />
        <Header />
      </div>
      <MainButtonLink
        href="/puppies"
        text="Find your puppy"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
    </>
  );
}
