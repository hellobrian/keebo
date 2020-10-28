import { Layout } from "../components/layout";
import Link from "next/link";
import { Box } from "theme-ui";
import { useRouter } from "next/router";
import { NavLink } from "../components/NavLink/NavLink";

export default function Scratchpad() {
  const router = useRouter();

  const links = ["keyboards", "switches", "keycaps", "scratchpad"];

  return (
    <Layout pageTitle="scratchpad">
      <Box
        as="ul"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(8, minmax(125px, 1fr))",
        }}
      >
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
      </Box>
    </Layout>
  );
}
