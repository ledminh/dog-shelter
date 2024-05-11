import Link from "next/link";
import { RightArrowIcon } from "../../../assets/icons";

type Props = {
  href: string;
  text: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export default function MainButtonLink({
  href,
  text,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  return (
    <Link
      href={href}
      className="bg-primary-3 text-primary-1 font-bold text-lg flex gap-4 justify-between items-center p-2 md:p-4 rounded-lg group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span>{text}</span>
      <div className="w-10 h-10 bg-primary-2 p-2 rounded-xl group-hover:translate-x-1 transition-all duration-200">
        <RightArrowIcon />
      </div>
    </Link>
  );
}
