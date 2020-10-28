import Link from "next/link";
import { Link as ThemeLink } from "theme-ui";
import { useRouter } from "next/router";

export function NavLink({ href, children }) {
  const router = useRouter();

  return (
    <Link href={href}>
      <AnchorLink className={className} isActive={router.pathname === href}>
        {children}
      </AnchorLink>
    </Link>
  );
}

export function AnchorLink({ isActive = false, children, variant = "nav" }) {
  const activeStyles = {
    borderBottomWidth: "4px",
    borderBlockEndStyle: "solid",
    borderBottomColor: "active",
  };

  const styles = { textDecoration: "none" };

  return (
    <ThemeLink
      variant={variant}
      sx={isActive ? { ...styles, ...activeStyles } : styles}
    >
      {children}
    </ThemeLink>
  );
}
