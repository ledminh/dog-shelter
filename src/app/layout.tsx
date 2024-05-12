import "./styles.css";

import Logo from "@/components/Layout/Logo";
import NavLink from "@/components/Layout/NavLink";

import { navLinks } from "@/config";
import Link from "next/link";

export const metadata = {
  title: "Dog Shelter",
  description: "A landing page for a dog shelter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative h-screen flex justify-center items-center">
          <header>
            <div className="absolute top-4 left-4">
              <Logo />
            </div>
            <div className="absolute top-4 right-4">
              <NavLink
                href={navLinks.about}
                firstLine="ABOUT US"
                secondLine="WHO WE ARE"
              />
            </div>
          </header>
          <main className="w-full flex flex-col justify-center items-center">
            {children}
          </main>
          <footer className="absolute bottom-4 left-4">
            <NavLink
              href={navLinks.contact}
              firstLine="CONTACT"
              secondLine="GET IN TOUCH"
            />
          </footer>
          <Link
            href="https://github.com/ledminh/dog-shelter"
            className="absolute bottom-4 left-1/2 -translate-x-1/2"
          >
            source code
          </Link>
        </div>
      </body>
    </html>
  );
}
