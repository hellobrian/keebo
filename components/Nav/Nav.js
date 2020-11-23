import { useState } from 'react'
import { Grid, Box, Flex, NavLink, MenuButton, Close } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

const styles = {
  fontFamily: 'body',
  py: 1,
  px: 2,
}

const activeStyles = {
  ...styles,
  bg: 'accent',
  color: 'black',
}

const Navigation = ({ router, sx = {} }) => (
  <Flex as="ul" sx={{ justifyContent: 'flex-end', ...sx }}>
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

const ToggleMenuButton = ({ isMenuOpen = false, ...props }) => (
  <>{isMenuOpen ? <Close {...props} /> : <MenuButton {...props} />}</>
)

export function Nav({ sx = {} }) {
  const router = useRouter()
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <div
      style={{
        position: 'relative',
        display: 'grid',
      }}
    >
      <Grid
        as="header"
        sx={{
          position: 'fixed',
          zIndex: 1000,
          bg: 'transparent',
          width: '100%',
          gridTemplateColumns: '400px 1fr',
          alignItems: 'center',
          p: 3,
          ...sx,
        }}
      >
        <Link href="/" passHref>
          <NavLink
            sx={{
              fontFamily: 'display',
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: 6,
              color: 'black',
            }}
          >
            Plastic Love
          </NavLink>
        </Link>

        <ToggleMenuButton
          isMenuOpen={isMenuOpen}
          aria-label="Toggle Menu"
          onClick={() => {
            setMenuOpen(!isMenuOpen)
          }}
          sx={{
            justifySelf: 'flex-end',
            '@media screen and (min-width: 400px)': {
              display: 'none',
            },
          }}
        />

        <Box
          as="nav"
          sx={{
            '@media screen and (max-width: 400px)': {
              display: 'none',
            },
          }}
        >
          <Navigation router={router} />
        </Box>
      </Grid>
      <Box
        sx={{
          '@media screen and (min-width: 400px)': {
            display: 'none',
          },
        }}
      >
        {isMenuOpen && (
          <Navigation
            router={router}
            sx={{
              position: 'fixed',
              top: 50,
              zIndex: 1,
              width: '100%',
              flexDirection: 'column',
              textAlign: 'right',
              p: 2,
              '& > li': {
                width: '100%',
                mb: 3,
              },
            }}
          />
        )}
      </Box>
    </div>
  )
}
