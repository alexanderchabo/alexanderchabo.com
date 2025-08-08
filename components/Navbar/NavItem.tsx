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
    <li className="list-none ml-4">
      <Link
        className={isActive ? "text-blue-600 underline" : ""}
        href={href}
      >
        {label}
      </Link>
    </li>
  );
};
