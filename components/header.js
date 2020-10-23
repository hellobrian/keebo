import { useReducer, useContext, useEffect, createContext } from "react";
import { NavLink } from "./nav-link";
import { useWindowWidth } from "../hooks/useWindowWidth";
import styles from "./header.module.css";

const MenuContext = createContext(null);

const initialState = { isOpen: false };

function reducer(state, action) {
  switch (action.type) {
    case "open":
      return { isOpen: true };

    case "close":
      return { isOpen: false };

    case "toggle":
      return { isOpen: !state.isOpen };

    default:
      throw new Error();
  }
}

function useMenu() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const isOpen = state.isOpen;
  const toggle = () => dispatch({ type: "toggle" });
  const close = () => dispatch({ type: "close" });
  const open = () => dispatch({ type: "open" });

  return { isOpen, toggle, close, open };
}

function MenuButton({ id = "menu-list" }) {
  const { isOpen, toggle } = useContext(MenuContext);

  return (
    <button
      className={styles.button}
      aria-expanded={isOpen}
      aria-controls={id}
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
  );
}

function MenuList({ id = "menu-list" }) {
  return (
    <ul id={id} className={styles.menuList}>
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
  );
}

export function Header({ className }) {
  const { isOpen, toggle } = useMenu();
  const { width } = useWindowWidth(0);

  return (
    <MenuContext.Provider value={{ isOpen, toggle, width }}>
      <header className={`${styles.header} ${className}`}>
        {width < 768 && (
          <nav className={styles.menu}>
            <MenuButton></MenuButton>
          </nav>
        )}

        {width > 768 ? <MenuList></MenuList> : isOpen && <MenuList></MenuList>}
      </header>
    </MenuContext.Provider>
  );
}
