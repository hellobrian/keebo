import { useReducer, useContext, createContext } from "react";
import { NavLink } from "./nav-link";
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

function MenuList({ children, id = "menu-list" }) {
  const { isOpen } = useContext(MenuContext);

  return (
    <ul
      id={id}
      className={styles.menuList}
      style={{
        visibility: isOpen ? "visible" : "hidden",
        height: isOpen ? "auto" : 0,
      }}
    >
      {children}
    </ul>
  );
}

export function Header({ className }) {
  const { isOpen, toggle } = useMenu();

  return (
    <MenuContext.Provider value={{ isOpen, toggle }}>
      <header className={`${styles.header} ${className}`}>
        <nav className={styles.menu}>
          <MenuButton></MenuButton>
          <div>LOGO</div>
        </nav>
        <MenuList>
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
        </MenuList>
      </header>
    </MenuContext.Provider>
  );
}
