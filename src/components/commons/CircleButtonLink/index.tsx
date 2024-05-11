import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function CircleButtonLink({ children }: Props) {
  return (
    <Link
      href="/"
      className="bg-primary-1 p-2 rounded-full block w-12 h-12 hover:rotate-12"
    >
      {children}
    </Link>
  );
}
