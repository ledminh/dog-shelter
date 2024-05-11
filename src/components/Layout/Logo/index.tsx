import { DogIcon } from "../../../assets/icons";

export default function Logo() {
  return (
    <div className="flex gap-2">
      <div className="w-14 h-14 bg-primary-2 text-white rounded-full p-1">
        <DogIcon />
      </div>
      <div className="flex flex-col">
        <h1 className="text-secondary text-lg font-bold">DOG</h1>
        <h1 className="text-primary-2 text-lg font-bold">SHELTER</h1>
      </div>
    </div>
  );
}
