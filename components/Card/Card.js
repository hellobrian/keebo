import { Grid, Flex, Heading, Badge, Text, useThemeUI } from 'theme-ui'

import Link from 'next/link'
import { CardLink } from './CardLink'
import { CardImage } from './CardImage'

export function Card({
  src = null,
  heading = 'Drop Ctrl High-Profile',
  text,
  status = 'purchased',
  href = '/',
  artisan = false,
  layout = 'using',
  sx = {},
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
        gridTemplateRows: layout === 'using' ? '500px 1fr' : '1fr',
        borderTop: ['none', 'none', `8px solid ${theme.colors.badge[status]}`],
        ...sx,
      }}
    >
      {src && (
        <CardImage
          heading={heading}
          src={src}
          color={theme.colors.badge[status]}
        />
      )}
      <Flex
        sx={{
          p: 4,
          flexDirection: layout === 'using' ? 'column' : 'row',
          alignItems: layout === 'using' ? 'flex-start' : 'center',
        }}
      >
        {layout !== 'using' && (
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
        )}
        <Link href={href} passHref>
          <a style={{ textDecoration: 'none' }}>
            <Heading
              variant="h2"
              sx={{
                ml: layout === 'using' ? 0 : 3,
                mb: 3,
                bg: 'black',
                width: 'fit-content',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: 7,
              }}
            >
              {heading}
            </Heading>
          </a>
        </Link>

        {layout === 'using' && (
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
        )}

        {/* Text */}
        {layout === 'using' && (
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
        )}

        {/* Read more Link */}
        {layout === 'using' && (
          <Link href={href} passHref>
            <CardLink
              color={theme.colors.badge[status]}
              ariaLabel={`Read more about ${heading}.`}
            >
              Read more.
            </CardLink>
          </Link>
        )}
      </Flex>
    </Grid>
  )
}
