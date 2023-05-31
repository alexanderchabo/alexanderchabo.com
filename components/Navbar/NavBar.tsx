import { NavItem } from "./NavItem";
import styles from "./NavBar.module.css";
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
      <nav className={styles.nav}>
        <Link className={styles.logo} href="/">
          Ac
        </Link>
        <ul>
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
