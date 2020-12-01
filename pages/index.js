import { request, gql } from 'graphql-request'
import { Grid } from 'theme-ui'
import { Layout } from '../components/layout'
import { Card } from '../components/Card/Card'

const endpoint = process.env.GRAPHQL_ENDPOINT
const query = gql`
  query {
    keyboards(sort: "name") {
      id
      name
      status
      cardImgUrl
      cardText
      pcb {
        pins
      }
    }
  }
`

export async function getStaticProps() {
  const data = await request(endpoint, query)
  return {
    props: { data },
    revalidate: 1,
  }
}

export default function Home({ data }) {
  return (
    <Layout pageTitle="keyboards">
      <Grid
        sx={{
          // gridTemplateColumns: 'repeat(auto-fit, minmax(700px, 1fr))',
          gridTemplateColumns: 'repeat(5, 1fr)',
          maxWidth: '2000px',
          mb: 5,
        }}
      >
        {data.keyboards
          .filter(keyboard => keyboard.status === 'using')
          .map((keeb, index) => (
            <Card
              key={keeb.id}
              layout={keeb.status}
              src={keeb.cardImgUrl}
              status={keeb.status}
              heading={keeb.name}
              text={keeb.cardText}
              href={`/keyboards/${keeb.id}`}
              sx={{ gridColumn: index % 3 ? 'span 2' : 'span 3' }}
            />
          ))}
      </Grid>
      <Grid
        sx={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          maxWidth: '2000px',
        }}
      >
        {data.keyboards
          .filter(keyboard => keyboard.status === 'want')
          .map(keeb => (
            <Card
              key={keeb.id}
              layout={keeb.status}
              status={keeb.status}
              heading={keeb.name}
              text={keeb.cardText}
              href={`/keyboards/${keeb.id}`}
            />
          ))}
      </Grid>
      <Grid
        sx={{
          gridTemplateColumns: '1fr 1fr 1fr',
          gridGap: 4,
          maxWidth: '2000px',
        }}
      >
        {data.keyboards
          .filter(keyboard => keyboard.status === 'purchased')
          .map(keeb => (
            <Card
              key={keeb.id}
              layout={keeb.status}
              status={keeb.status}
              heading={keeb.name}
              text={keeb.cardText}
              href={`/keyboards/${keeb.id}`}
            />
          ))}
      </Grid>
    </Layout>
  )
}
