import { Grid, Flex, Heading, Badge, Text, useThemeUI } from 'theme-ui'

import Link from 'next/link'
import { CardLink } from './CardLink'
import { CardImage } from './CardImage'

export function Card({
  src,
  heading = 'Drop Ctrl High-Profile',
  text,
  status = 'purchased',
  href = '/',
  artisan = false,
}) {
  const { theme } = useThemeUI()
  let limitedText = ''
  if (text) {
    limitedText = text.split(' ').slice(0, 30)
  }

  return (
    <Grid
      sx={{
        borderRadius: 1,
        boxShadow: 'boxShadow',
        bg: 'black',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '250px 1fr',
        borderTop: ['none', 'none', `8px solid ${theme.colors.badge[status]}`],
      }}
    >
      <CardImage
        heading={heading}
        src={src}
        color={theme.colors.badge[status]}
      />
      <Flex
        sx={{
          pt: 3,
          px: 4,
          pb: 4,
          flexDirection: 'column',
        }}
      >
        <Link href={href} passHref>
          <a style={{ textDecoration: 'none' }}>
            <Heading
              variant="h2"
              sx={{
                mb: 3,
                bg: 'black',
                width: 'fit-content',
              }}
            >
              {heading}
            </Heading>
          </a>
        </Link>

        <Flex
          sx={{
            justifyContent: 'flex-start',
            mb: 3,
            transform: 'translateX(-1px)',
          }}
        >
          <Badge variant={status}>{status}</Badge>
          {artisan && (
            <Badge variant="artisan" sx={{ ml: 2 }}>
              artisan
            </Badge>
          )}
        </Flex>
        <Text
          as="p"
          sx={{
            mb: 3,
            bg: 'black',
            color: 'text',
          }}
        >
          {[...limitedText, '...'].join(' ')}
        </Text>
        <Link href={href} passHref>
          <CardLink
            color={theme.colors.badge[status]}
            ariaLabel={`Read more about ${heading}.`}
          >
            Read more.
          </CardLink>
        </Link>
      </Flex>
    </Grid>
  )
}
