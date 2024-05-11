import { DogIcon } from "../../../assets/icons";
import { logo } from "@/config";

export default function Logo() {
  const { line1, line2 } = logo;
  return (
    <div className="flex gap-2">
      <div className="w-14 h-14 bg-primary-2 text-white rounded-full p-1">
        <DogIcon />
      </div>
      <div className="flex flex-col">
        <h1 className="text-secondary text-lg font-bold">{line1}</h1>
        <h1 className="text-primary-2 text-lg font-bold">{line2}</h1>
      </div>
    </div>
  );
}
