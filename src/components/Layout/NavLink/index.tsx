import Link from "next/link";

type Props = {
  href: string;
  firstLine: string;
  secondLine: string;
};

export default function NavLink({ href, firstLine, secondLine }: Props) {
  return (
    <Link href={href} className="flex flex-col group">
      <h4 className="group-hover:text-terinary font-bold text-terinary/70">
        {firstLine}
      </h4>
      <h4 className="group-hover:text-primary-2 font-bold text-primary-2/70">
        {secondLine}
      </h4>
    </Link>
  );
}
