import Head from "next/head";
import { Nav } from "./Nav/Nav";
import { Grid } from "theme-ui";

export function Layout({ pageTitle, children, cardLayout = false, ...props }) {
  return (
    <>
      <Head>
        <title>Keebs | {pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        className="layout"
        sx={{
          gridTemplateAreas: `
            "header"
            "main"
      `,
        }}
        {...props}
      >
        <Nav sx={{ gridArea: "header" }}></Nav>
        <Grid as="main" sx={{ gridArea: "main" }}>
          {cardLayout ? (
            <Grid
              sx={{
                gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",

                "@media screen and (max-width: 1150px)": {
                  gridTemplateColumns: "1fr",
                },
                gridGap: 4,
                p: 1,
                my: 0,
                mx: "auto",
                maxWidth: "1200px",
              }}
            >
              {children}
            </Grid>
          ) : (
            children
          )}
        </Grid>
      </Grid>
    </>
  );
}
