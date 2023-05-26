"use client";

import Link from "next/link";
import classNames from "classnames";
import styles from "./NavItem.module.css";
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
    <li>
      <Link
        className={classNames(styles.link, {
          [styles.active]: isActive,
        })}
        href={href}
      >
        {label}
      </Link>
    </li>
  );
};
