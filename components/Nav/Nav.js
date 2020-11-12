import { Grid, Box, Flex } from "theme-ui";
import { useRouter } from "next/router";
import Link from "next/link";

import { NavLink } from "./NavLink";

export function Nav({ sx = {} }) {
  const router = useRouter();
  return (
    <Grid
      sx={{
        bg: "black",
        width: "100%",
        ...sx,
      }}
    >
      <Grid
        as="ul"
        sx={{
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          m: "0 auto",
          py: 3,
        }}
      >
        <Box as="li" sx={{ mr: 4, px: 1, width: "fit-content" }}>
          <Link href={"/"} passHref>
            <NavLink isActive={router.pathname === "/"}>Keyboards</NavLink>
          </Link>
        </Box>
        <Box as="li" sx={{ px: 1, width: "fit-content" }}>
          <Link href={"/keycaps"} passHref>
            <NavLink isActive={router.pathname === "/keycaps"}>Keycaps</NavLink>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}
