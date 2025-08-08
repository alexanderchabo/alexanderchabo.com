import { NavItem } from "./NavItem";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home", targetSegment: null },
  // { href: "/blog", label: "Blog", targetSegment: "blog" },
  { href: "/resume", label: "Resume", targetSegment: "resume" },
  { href: "/contact", label: "Contact", targetSegment: "contact" },
];

export const NavBar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center py-4 border-b border-gray-400">
        <Link
          className="text-xl font-bold p-1 border-[3px] border-black flex justify-center items-center bg-white hover:bg-black hover:text-white cursor-pointer"
          href="/"
        >
          Ac
        </Link>
        <ul className="flex">
          {NAV_LINKS.map(({ href, label, targetSegment }) => (
            <NavItem
              key={href}
              href={href}
              label={label}
              targetSegment={targetSegment}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};
