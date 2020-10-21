import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./header.module.css";

function NavLink({ href, children }) {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} ${styles.isActive}`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}

const MENU_LIST = [
  { href: "/", label: "Keyboards" },
  { href: "/switches", label: "Switches" },
  { href: "/keycaps", label: "Keycaps" },
];

export function Header() {
  return (
    <>
      <header>
        <nav>
          <ul className={styles.list}>
            {MENU_LIST.map((item) => (
              <li key={item.label}>
                <NavLink href={item.href}>
                  <a className={styles.link}>{item.label}</a>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
