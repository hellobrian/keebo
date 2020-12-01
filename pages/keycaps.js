import { request, gql } from 'graphql-request'
import { Grid } from 'theme-ui'
import { Layout } from '../components/layout'
import { Card } from '../components/Card/Card'

export default function Keycaps({ data }) {
  return (
    <Layout pageTitle="keycaps">
      {/* USING */}
      <Grid
        sx={{
          gridTemplateColumns: 'repeat(5, 1fr)',
          maxWidth: '2000px',
          mb: 5,
        }}
      >
        {data.keycaps
          .filter(keycap => keycap.status === 'using')
          .map((keycap, index) => (
            <Card
              key={keycap.id}
              src={keycap.cardImgUrl || '/keycaps/JTK-night-sakura.jpg'}
              status={keycap.status}
              heading={keycap.name}
              artisan={keycap.artisan}
              href={`/keycaps/${keycap.id}`}
              text={keycap.cardText}
              layout={keycap.status}
              sx={{
                gridColumn: index % 3 ? 'span 2' : 'span 3',
                '@media screen and (max-width: 1000px)': {
                  gridColumn: 'span 5',
                },
              }}
            />
          ))}
      </Grid>
      {/* WANT */}
      <Grid
        sx={{
          gridTemplateColumns: '1fr 1fr',
          maxWidth: '2000px',
          mb: 5,
          '@media screen and (max-width: 1000px)': {
            gridTemplateColumns: '1fr',
          },
        }}
      >
        {data.keycaps
          .filter(keycap => keycap.status === 'want')
          .map(keycap => (
            <Card
              key={keycap.id}
              status={keycap.status}
              heading={keycap.name}
              artisan={keycap.artisan}
              href={`/keycaps/${keycap.id}`}
              text={keycap.cardText}
              layout={keycap.status}
            />
          ))}
      </Grid>
      {/* PURCHASED */}
      <Grid
        sx={{
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridGap: 4,
          maxWidth: '2000px',
          mb: 4,
        }}
      >
        {data.keycaps
          .filter(keycap => keycap.status === 'purchased')
          .sort((a, b) => {
            if (a.artisan) {
              return -1
            }

            if (b.artisan) {
              return 1
            }

            return 0
          })
          .map(keycap => (
            <Card
              key={keycap.id}
              status={keycap.status}
              heading={keycap.name}
              artisan={keycap.artisan}
              href={`/keycaps/${keycap.id}`}
              text={keycap.cardText}
              layout={keycap.status}
              sx={{
                gridColumn: '2 / span 3',
              }}
            />
          ))}
      </Grid>
    </Layout>
  )
}

const endpoint = process.env.GRAPHQL_ENDPOINT
const query = gql`
  query {
    keycaps {
      id
      name
      status
      artisan
      cardImgUrl
      cardText
    }
  }
`

export async function getStaticProps() {
  const data = await request(endpoint, query)

  return {
    props: {
      data,
    },
  }
}
