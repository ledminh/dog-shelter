import MainComponent from "@/components/Puppies/MainComponent";
import CircleButtonLink from "@/components/commons/CircleButtonLink";
import { dogs } from "@/data";

export default function PuppiesPage() {
  return (
    <>
      <MainComponent dog={dogs[0]} />
      <div className="flex gap-2">
        <button className="bg-gray-400 px-4 py-2 font-semibold rounded-3xl hover:bg-gray-500">
          PREV
        </button>
        <button className="bg-gray-400 px-4 py-2 font-semibold rounded-3xl hover:bg-gray-500">
          NEXT
        </button>
      </div>
    </>
  );
}
