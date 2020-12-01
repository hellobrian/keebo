import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { Box, Grid } from 'theme-ui'
import { Nav } from './Nav/Nav'

export function Layout({ pageTitle, children, ...props }) {
  return (
    <>
      <NextSeo
        title={`P L A S T I C ❤ | ${pageTitle}`}
        description={`A website that showcases Brian Han's keyboard collection.`}
      />
      <Head>
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
          <Box
            sx={{
              height: '100%',
              fontSize: 6,
              py: 3,
              px: 1,
              my: 0,
              mx: 'auto',
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
