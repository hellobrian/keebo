import { useState } from "react";
import { NavLink } from "./nav-link";
import styles from "./header.module.css";

export function Header({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <header className={`${styles.header} ${className}`}>
        <nav className={styles.menu}>
          <button
            className={styles.button}
            aria-expanded={isOpen}
            aria-controls="menu-list"
            type="button"
            onClick={toggle}
          >
            {isOpen ? (
              <span className={styles.close}>×</span>
            ) : (
              <span className={styles.open}>☰</span>
            )}
            <span className={styles.text}>Menu</span>
          </button>

          <div>LOGO</div>
        </nav>
        <ul
          id="menu-list"
          className={styles.menuList}
          style={{
            visibility: isOpen ? "visible" : "hidden",
            height: isOpen ? "auto" : 0,
          }}
        >
          <li>
            <NavLink href="/">
              <a className={styles.link}>Keyboards</a>
            </NavLink>
          </li>
          <li>
            <NavLink href="/switches">
              <a className={styles.link}>Switches</a>
            </NavLink>
          </li>
          <li>
            <NavLink href="/keycaps">
              <a className={styles.link}>Keycaps</a>
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}
