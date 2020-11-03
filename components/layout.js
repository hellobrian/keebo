import Head from "next/head";
import { Nav } from "./Nav/Nav";
import { Box, Grid } from "theme-ui";

export function Layout({ pageTitle, children, ...props }) {
  return (
    <>
      <Box {...props}>
        <Head>
          <title>Keebs | {pageTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box as="main">{children}</Box>
      </Box>
    </>
  );
}
