import { NavLink as ThemeLink } from "theme-ui";

export function NavLink({
  href = "",
  isActive = false,
  children,
  variant = "nav",
}) {
  const activeStyles = {
    borderBottomWidth: "4px",
    borderBlockEndStyle: "solid",
    borderBottomColor: "active",
  };

  const styles = { textDecoration: "none" };

  return (
    <ThemeLink
      href={href}
      variant={variant}
      sx={isActive ? { ...styles, ...activeStyles } : styles}
    >
      {children}
    </ThemeLink>
  );
}
