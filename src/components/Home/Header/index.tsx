import { DogFootIcon } from "../../../assets/icons";

export default function Header() {
  return (
    <header className="relative flex flex-col justify-center items-center">
      <div className="w-full h-full text-primary-1">
        <DogFootIcon />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-3">
            Find Your
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-3">
            Furry Friend
          </h1>
        </div>
        <h5 className="sm:text-lg font-bold text-secondary">
          Begin Your Adoption Journey Today!
        </h5>
      </div>
    </header>
  );
}
