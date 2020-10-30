import { Grid } from "theme-ui";
import { useRouter } from "next/link";
import { NavLink } from "./NavLink";

function NavGrid({ children }) {
  return (
    <Grid
      as="ul"
      sx={{
        gridTemplateColumns: "repeat(8, minmax(125px, 1fr))",
      }}
    >
      {children}
    </Grid>
  );
}

export function Nav({ storybook = false }) {
  const links = ["keyboards", "switches", "keycaps"];
  const [isActive, setActive] = React.useState("keyboards");
  if (!storybook) {
    const router = useRouter();
    return (
      <NavGrid>
        {links.map((link) => {
          const href = `/${link}`;
          return (
            <li key={link}>
              <Link href={href} passHref>
                <NavLink isActive={router.pathname === href}>{link}</NavLink>
              </Link>
            </li>
          );
        })}
      </NavGrid>
    );
  } else {
    return (
      <NavGrid>
        {links.map((link) => {
          const href = `/${link}`;
          return (
            <li key={link}>
              <NavLink href={href} isActive={isActive === href}>
                {link}
              </NavLink>
            </li>
          );
        })}
      </NavGrid>
    );
  }
}
