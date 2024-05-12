"use client";

import MainComponent from "@/components/Puppies/MainComponent";
import { dogs } from "@/data";
import { useState } from "react";

export default function PuppiesPage() {
  const [curDogI, setCurDogI] = useState(0);

  const handleNext = () => {
    setCurDogI((prev) => (prev + 1) % dogs.length);
  };

  const handlePrev = () => {
    setCurDogI((prev) => (prev - 1 + dogs.length) % dogs.length);
  };

  return (
    <>
      <MainComponent dog={dogs[curDogI]} />
      <div className="flex gap-2 absolute bottom-4 right-4">
        <button
          className="bg-gray-400 px-4 py-2 font-semibold rounded-3xl hover:bg-gray-500"
          onClick={handlePrev}
        >
          PREV
        </button>
        <button
          className="bg-gray-400 px-4 py-2 font-semibold rounded-3xl hover:bg-gray-500"
          onClick={handleNext}
        >
          NEXT
        </button>
      </div>
    </>
  );
}
