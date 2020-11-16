import { request, gql } from 'graphql-request'

import { Layout } from '../components/layout'
import { Card } from '../components/Card/Card'

export default function Keycaps({ data }) {
  return (
    <Layout pageTitle="keycaps" cardLayout>
      {data.keycaps.map(keycap => {
        return (
          <Card
            key={keycap.id}
            src={keycap.cardImgUrl || '/keycaps/JTK-night-sakura.jpg'}
            status={keycap.status}
            heading={keycap.name}
            artisan={keycap.artisan}
            href={`/keycaps/${keycap.id}`}
            text={keycap.cardText}
          />
        )
      })}
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
