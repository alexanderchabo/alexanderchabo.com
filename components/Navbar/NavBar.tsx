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
      <nav className="flex justify-between items-center py-4 md:py-5 border-b border-gray-200">
        <Link
          className="text-xl font-bold p-1 px-2 border-[3px] border-black flex justify-center items-center bg-white hover:bg-black hover:text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md shadow-[4px_4px_0_#000] active:shadow-[0_0_0_#000] active:translate-x-[4px] active:translate-y-[4px] transition-all"
          href="/"
        >
          Ac
        </Link>
        <ul className="flex gap-5" role="menubar" aria-label="Primary">
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
