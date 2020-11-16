import Head from 'next/head'
import { Box, Grid } from 'theme-ui'
import { Nav } from './Nav/Nav'

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
        <Nav sx={{ gridArea: 'header' }} />
        <Grid as="main" sx={{ gridArea: 'main', height: '100%' }}>
          {cardLayout ? (
            <Grid
              sx={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                '@media screen and (max-width: 1150px)': {
                  gridTemplateColumns: '1fr',
                },
                gridGap: 4,
                py: 6,
                px: 1,
                my: 0,
                mx: 'auto',
                maxWidth: '2000px',
              }}
            >
              {children}
            </Grid>
          ) : (
            <Box
              sx={{
                height: '100%',
                fontSize: 6,
                py: 6,
                px: 1,
                my: 0,
                mx: 'auto',
              }}
            >
              {children}
            </Box>
          )}
        </Grid>
      </Grid>
    </>
  )
}
