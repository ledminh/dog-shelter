import { FacebookIcon, InstagramIcon } from "@/assets/icons";
import MainComponent from "@/components/Home/MainComponent";

import { socialLinks } from "@/config";

import CircleButtonLink from "@/components/commons/CircleButtonLink";

export default function DogShelter() {
  const { facebook, instagram } = socialLinks;

  return (
    <>
      <MainComponent />
      <div className="absolute bottom-4 right-4 flex gap-2">
        <CircleButtonLink href={facebook}>
          <FacebookIcon />
        </CircleButtonLink>
        <CircleButtonLink href={instagram}>
          <InstagramIcon />
        </CircleButtonLink>
      </div>
    </>
  );
}

// https://dribbble.com/shots/24130813-Dog-Shelter-Showcase-Slider-for-WordPress
