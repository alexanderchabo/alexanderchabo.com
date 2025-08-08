"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface NavItemProps {
  href: string;
  label: string;
  targetSegment: string | null;
}

export const NavItem = ({ href, label, targetSegment }: NavItemProps) => {
  const activeSegment = useSelectedLayoutSegment();
  const isActive = activeSegment === targetSegment;

  return (
    <li className="ml-4" role="none">
      <Link
        role="menuitem"
        aria-current={isActive ? "page" : undefined}
        className={
          isActive
            ? "text-blue-700 underline underline-offset-4 font-medium"
            : "hover:underline underline-offset-4 text-gray-700 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
        }
        href={href}
      >
        {label}
      </Link>
    </li>
  );
};
