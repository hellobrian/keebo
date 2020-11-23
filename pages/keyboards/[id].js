import { request, gql } from 'graphql-request'
import {
  Box,
  Text,
  Grid,
  Heading,
  Image as ThemeImage,
  AspectRatio,
} from 'theme-ui'

import Image from 'next/image'
import { Layout } from '../../components/layout'

const endpoint = process.env.GRAPHQL_ENDPOINT

export async function getStaticPaths() {
  const query = gql`
    query {
      keyboards {
        id
      }
    }
  `
  const data = await request(endpoint, query)
  const paths = data.keyboards.map(keyboard => {
    return { params: { id: keyboard.id } }
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const variables = {
    id: params.id,
  }
  const query = gql`
    query getKeyboard($id: ID!) {
      keyboard(id: $id) {
        id
        name
        keycaps {
          id
          name
        }
      }
    }
  `

  const data = await request(endpoint, query, variables)

  return {
    props: { data },
  }
}

export default function Keyboard({ data }) {
  return (
    <Layout pageTitle={data.keyboard.name}>
      <Grid
        sx={{
          bg: 'black',
          color: 'white',
          width: '1200px',
          height: '100%',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridGap: '20x',
          p: 4,
        }}
      >
        <Heading
          sx={{
            fontFamily: 'profile',
            textTransform: 'uppercase',
            gridColumn: 'span 4',
            mb: 4,
          }}
        >
          {data.keyboard.name}
        </Heading>
        <Box sx={{ gridColumn: 'span 4', mb: 4 }}>
          <AspectRatio ratio={16 / 9} className="AspectRatio">
            <ThemeImage
              className="ThemeImage"
              as={Image}
              alt={data.keyboard.heading}
              src="/keyboards/drop-ctrl/0.JPG"
              width={1200}
              height={700}
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
          </AspectRatio>{' '}
        </Box>
        <Box as="section" sx={{ columnCount: 4, gridColumn: 'span 4' }}>
          <Heading
            sx={{
              fontFamily: 'profile',
              fontSize: 4,
              textTransform: 'uppercase',
            }}
          >
            DETAILS
          </Heading>
          <Text sx={{ color: 'white', mb: 4 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quia
            beatae animi fugit obcaecati quas ducimus officiis cumque sint! Cum
            temporibus aperiam possimus reiciendis reprehenderit recusandae
            nihil eaque, deleniti beatae.
          </Text>
          <Heading
            sx={{
              fontFamily: 'profile',
              fontSize: 4,
              textTransform: 'uppercase',
            }}
          >
            STORY
          </Heading>
          <Text sx={{ color: 'white', mb: 4 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quia
            beatae animi fugit obcaecati quas ducimus officiis cumque sint! Cum
            temporibus aperiam possimus reiciendis reprehenderit recusandae
            nihil eaque, deleniti beatae. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Eaque quia beatae animi fugit
            obcaecati quas ducimus officiis cumque sint! Cum temporibus aperiam
            possimus reiciendis reprehenderit recusandae nihil eaque, deleniti
            beatae.
          </Text>
          <Heading
            sx={{
              fontFamily: 'profile',
              fontSize: 4,
              textTransform: 'uppercase',
            }}
          >
            THOUGHTS
          </Heading>
          <Text sx={{ color: 'white', mb: 4 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quia
            beatae animi fugit obcaecati quas ducimus officiis cumque sint! Cum
            temporibus aperiam possimus reiciendis reprehenderit recusandae
            nihil eaque, deleniti beatae.Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Eaque quia beatae animi fugit obcaecati quas
            ducimus officiis cumque sint! Cum temporibus aperiam possimus
            reiciendis reprehenderit recusandae nihil eaque, deleniti beatae.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quia
            beatae animi fugit obcaecati quas ducimus officiis cumque sint! Cum
            temporibus aperiam possimus reiciendis reprehenderit recusandae
            nihil eaque, deleniti beatae.
          </Text>
          <Heading
            sx={{
              fontFamily: 'profile',
              fontSize: 4,
              textTransform: 'uppercase',
            }}
          >
            WHAT'S NEXT?
          </Heading>
          <Text sx={{ color: 'white', mb: 4 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quia
            beatae animi fugit obcaecati quas ducimus officiis cumque sint! Cum
            temporibus aperiam possimus reiciendis reprehenderit recusandae
            nihil eaque, deleniti beatae.
          </Text>
        </Box>
      </Grid>
    </Layout>
  )
}
