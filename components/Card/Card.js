import { useContext } from 'react'
import {
  Grid,
  Flex,
  Image,
  Heading,
  AspectRatio,
  Badge,
  Text,
  useThemeUI,
} from 'theme-ui'

import Link from 'next/link'
import { ModalContext } from '../Modal/Modal'
import { CardLink } from './CardLink'

const TEMP_IMG =
  'https://i1.wp.com/tokyokeyboard.com/wp-content/uploads/2019/10/hcStZW2-1.jpg?fit=2340%2C1073'

const LOREM_IPSUM = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
  reiciendis culpa dolore quo voluptatum tempore omnis fugiat ipsam
  error delectus odit dolores reprehenderit quasi at, accusantium saepe
  nihil, soluta consequatur?`

export function Card({
  src = TEMP_IMG,
  heading = 'Drop Ctrl High-Profile',
  text,
  status = 'purchased',
  href = '/',
  artisan = false,
}) {
  const { theme } = useThemeUI()
  const { handleModal } = useContext(ModalContext)

  return (
    <Grid
      sx={{
        borderRadius: 1,
        boxShadow: 'boxShadow',
        bg: 'black',
        gridTemplateColumns: '1fr',
        borderTop: ['none', 'none', `8px solid ${theme.colors.badge[status]}`],
      }}
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          onClick={() =>
            handleModal(
              <Flex
                sx={{
                  maxWidth: '1920',
                  border: '16px solid white',
                  bg: 'white',
                }}
              >
                <Image
                  data-testid="modal-image"
                  alt={heading}
                  src={src}
                  width={1920}
                  height={1080}
                />
              </Flex>
            )
          }
          alt={heading}
          src={src}
          width={800}
          height={500}
          sx={{
            bg: 'white',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            ':hover': {
              cursor: 'zoom-in',
            },
          }}
        />
      </AspectRatio>
      <Flex
        sx={{
          pt: 3,
          px: 4,
          pb: 4,
          flexDirection: 'column',
          justifyContent: 'center',
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
          {text || LOREM_IPSUM}
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
