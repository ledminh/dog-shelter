import React from "react";

import Image from "next/image";

import { dogs } from "@/data";
import MainButtonLink from "@/components/commons/MainButtonLink";

export default function PuppiesPage() {
  return (
    <div className="flex flex-wrap justify-center mt-30 px-4 sm:px-10 lg:mt-0 lg:justify-between lg:items-center w-full max-w-[1300px] gap-4 min-w-[28rem]">
      <ul className="flex flex-col gap-8 lg:basis-[23%] basis-[48%] order-2 lg:order-1">
        <li className="flex flex-col">
          <span className="text-secondary font-bold lg:text-xl">Name</span>
          <span className="text-primary-2 font-bold text-xl lg:text-4xl">
            {dogs[0].name}
          </span>
        </li>
        <li className="flex flex-col">
          <span className="text-secondary font-bold lg:text-xl">Breed</span>
          <span className="text-primary-2 font-bold text-xl lg:text-4xl">
            {dogs[0].breed}
          </span>
        </li>
        <li className="flex flex-col">
          <span className="text-secondary font-bold lg:text-xl">Age</span>
          <span className="text-primary-2 font-bold text-xl lg:text-4xl">
            {`${dogs[0].age} ${dogs[0].age > 1 ? "months" : "month"}`}{" "}
          </span>
        </li>
      </ul>
      <div className="relative arc bg-primary-1 h-[27rem] sm:h-[30rem] basis-full sm:basis-2/3 lg:h-[70vh] lg:basis-1/2 order-1 lg:order-2">
        <Image
          src={dogs[0].image}
          alt={dogs[0].name}
          width={500}
          height={500}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 -z-10 w-2/3"
        />
        <div className="flex flex-col justify-between items-center h-full pt-10 z-50">
          <h1 className="text-7xl text-primary-3 font-bold">{dogs[0].name}</h1>
          <div className="bg-secondary/60 p-2 flex flex-col justify-center items-center gap-2 w-4/5 mx-auto rounded-t-lg">
            <p className="text-white text-center font-semibold text-lg">
              {dogs[0].description}
            </p>
            <MainButtonLink
              href={`/adopt/${dogs[0].id}`}
              text="Adopt this Puppy"
            />
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-8  md:basis-[48%] lg:basis-[23%] order-3 text-right">
        <li className="flex flex-col">
          <span className="text-secondary font-bold lg:text-xl">Color</span>
          <span className="text-primary-2 font-bold text-xl lg:text-4xl">
            {dogs[0].color}
          </span>
        </li>
        <li className="flex flex-col">
          <span className="text-secondary font-bold lg:text-xl">
            Personality
          </span>
          <span className="text-primary-2 font-bold text-xl lg:text-4xl">
            {dogs[0].personality}
          </span>
        </li>
        <li className="flex flex-col">
          <span className="text-secondary font-bold lg:text-xl">Weight</span>
          <span className="text-primary-2 font-bold text-xl lg:text-4xl">{`${dogs[0].weight} pounds`}</span>
        </li>
      </ul>
    </div>
  );
}
