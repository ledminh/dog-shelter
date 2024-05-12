import Image from "next/image";

import MainButtonLink from "@/components/commons/MainButtonLink";

type Props = {
  dog: {
    id: string;
    name: string;
    breed: string;
    age: number;
    image: string;
    description: string;
    color: string;
    personality: string;
    weight: number;
  };
};
export default function MainComponent({ dog }: Props) {
  const {
    id,
    name,
    breed,
    age,
    image,
    description,
    color,
    personality,
    weight,
  } = dog;

  return (
    <div className="flex flex-wrap justify-center mt-30 px-4 sm:px-10 lg:mt-0 lg:justify-between lg:items-center w-full max-w-[1300px] gap-4 min-w-[28rem]">
      <ul className="flex flex-col gap-8 lg:basis-[23%] basis-[48%] order-2 lg:order-1">
        <li className="flex flex-col">
          <span className="text-secondary font-bold lg:text-xl">Name</span>
          <span className="text-primary-2 font-bold text-xl lg:text-4xl">
            {name}
          </span>
        </li>
        <li className="flex flex-col">
          <span className="text-secondary font-bold lg:text-xl">Breed</span>
          <span className="text-primary-2 font-bold text-xl lg:text-4xl">
            {breed}
          </span>
        </li>
        <li className="flex flex-col">
          <span className="text-secondary font-bold lg:text-xl">Age</span>
          <span className="text-primary-2 font-bold text-xl lg:text-4xl">
            {`${age} ${age > 1 ? "months" : "month"}`}{" "}
          </span>
        </li>
      </ul>
      <div className="relative arc bg-primary-1 h-[27rem] sm:h-[30rem] basis-full sm:basis-2/3 lg:h-[70vh] lg:basis-1/2 order-1 lg:order-2">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 -z-10 w-2/3"
        />
        <div className="flex flex-col justify-between items-center h-full pt-10 z-50">
          <h1 className="text-7xl text-primary-3 font-bold">{name}</h1>
          <div className="bg-secondary/60 p-2 flex flex-col justify-center items-center gap-2 w-4/5 mx-auto rounded-t-lg">
            <p className="text-white text-center font-semibold text-lg">
              {description}
            </p>
            <MainButtonLink href={`/adopt/${id}`} text="Adopt this Puppy" />
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-8  md:basis-[48%] lg:basis-[23%] order-3 text-right">
        <li className="flex flex-col">
          <span className="text-secondary font-bold lg:text-xl">Color</span>
          <span className="text-primary-2 font-bold text-xl lg:text-4xl">
            {color}
          </span>
        </li>
        <li className="flex flex-col">
          <span className="text-secondary font-bold lg:text-xl">
            Personality
          </span>
          <span className="text-primary-2 font-bold text-xl lg:text-4xl">
            {personality}
          </span>
        </li>
        <li className="flex flex-col">
          <span className="text-secondary font-bold lg:text-xl">Weight</span>
          <span className="text-primary-2 font-bold text-xl lg:text-4xl">{`${weight} pounds`}</span>
        </li>
      </ul>
    </div>
  );
}
