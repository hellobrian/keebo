import { useReducer, useContext, useEffect, createContext } from "react";
import { Grid, Box, Button, Text } from "theme-ui";
import { NavLink } from "./NavLink/NavLink";
import { useWindowWidth } from "../hooks/useWindowWidth";

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

const ItemLink = ({ href, children }) => (
  <Box as="li" sx={{ py: "16px", display: "inline-flex" }}>
    <NavLink href={href}>
      <Box
        as="a"
        sx={{
          display: "inline-flex",
          p: "8px",
          ".isActive": {
            color: "white",
            textDecoration: "underline",
            textDecorationColor: "var(--pink--light)",
          },
        }}
      >
        {children}
      </Box>
    </NavLink>
  </Box>
);

export function Header({ gridArea = "header", className }) {
  const { isOpen, toggle } = useMenu();
  const { width } = useWindowWidth(0);

  return (
    <MenuContext.Provider value={{ isOpen, toggle, width }}>
      <header className={className} style={{ gridArea }}>
        <Grid
          as="ul"
          id={"menu-list"}
          sx={{
            position: "fixed",
            width: "100%",
            bg: "pink",
            color: "white",
            gridTemplateColumns: "repeat(auto-fit, 120px)",
            gridGap: "20px",
          }}
        >
          <ItemLink href="/">Keyboards</ItemLink>
          <ItemLink href="/switches">Switches</ItemLink>
          <ItemLink href="/keycaps">Keycaps</ItemLink>
        </Grid>
      </header>
    </MenuContext.Provider>
  );
}
