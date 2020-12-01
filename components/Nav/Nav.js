import { Grid, Box, Flex, NavLink } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

const styles = {
  fontFamily: 'heading',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  py: 1,
  px: 2,
}

const activeStyles = {
  ...styles,
  bg: 'accent',
  color: 'black',
}

const Navigation = ({ router, sx = {} }) => (
  <Flex
    as="ul"
    sx={{
      justifyContent: 'flex-end',

      '@media screen and (max-width: 768px)': {
        flexDirection: 'column',
      },
      ...sx,
    }}
  >
    <Box as="li" sx={{ mr: 4, px: 1, width: 'fit-content' }}>
      <Link href="/" passHref>
        <NavLink sx={router.pathname === '/' ? activeStyles : styles}>
          Keyboards
        </NavLink>
      </Link>
    </Box>
    <Box as="li" sx={{ px: 1, width: 'fit-content' }}>
      <Link href="/keycaps" passHref>
        <NavLink sx={router.pathname === '/keycaps' ? activeStyles : styles}>
          Keycaps
        </NavLink>
      </Link>
    </Box>
  </Flex>
)

export function Nav({ sx = {} }) {
  const router = useRouter()

  return (
    <Grid
      as="header"
      sx={{
        bg: 'black',
        width: '100%',
        mx: 'auto',
        gridTemplateColumns: '400px 1fr',
        alignItems: 'center',
        p: 3,
        '@media screen and (max-width: 768px)': {
          gridTemplateColumns: '1fr',
        },
        ...sx,
      }}
    >
      <Link href="/" passHref>
        <NavLink
          sx={{
            fontFamily: 'heading',
            display: 'inline-flex',
            gridGap: 0,
            fontSize: 6,
            bg: 'black',
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            flexWrap: 'wrap',
            width: 'fit-content',
            p: 2,
          }}
        >
          Plastic Love
        </NavLink>
      </Link>

      <Box as="nav">
        <Navigation router={router} />
      </Box>
    </Grid>
  )
}
