import Head from "next/head";
import { Header } from "./header";
import { Box, Grid } from "theme-ui";

export function Layout({ pageTitle, children, ...props }) {
  return (
    <>
      <Box {...props}>
        <Head>
          <title>Keebs | {pageTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box
          sx={{
            display: "grid",
            gridGap: "20px",
            gridTemplateRows: "50px 1fr",
            height: "100vh",
            gridTemplateAreas: `
              "header"
              "content"
            `,
          }}
          className={"layout"}
        >
          <Header gridArea="header"></Header>
          <Box as="main" sx={{ pt: "32px", gridArea: "content" }}>
            {children}
          </Box>
        </Box>
      </Box>
      {/* <style jsx>
        {`
          .layout {
            grid-template-areas:
              "header"
              "content";
          }

          .header {
            grid-area: header;
          }

          @media (max-width: 768px) {
            .header {
              margin: 0;
            }
          }

          .content {
            grid-area: content;
            height: 200vh;
          }
        `}
      </style> */}
    </>
  );
}
