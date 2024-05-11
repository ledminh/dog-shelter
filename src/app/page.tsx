import { FacebookIcon, InstagramIcon } from "@/assets/icons";
import MainComponent from "@/components/Home/MainComponent";

import CircleButtonLink from "@/components/commons/CircleButtonLink";

export default function DogShelter() {
  return (
    <>
      <MainComponent />
      <div className="absolute bottom-4 right-4 flex gap-2">
        <CircleButtonLink>
          <FacebookIcon />
        </CircleButtonLink>
        <CircleButtonLink>
          <InstagramIcon />
        </CircleButtonLink>
      </div>
    </>
  );
}

// https://dribbble.com/shots/24130813-Dog-Shelter-Showcase-Slider-for-WordPress
