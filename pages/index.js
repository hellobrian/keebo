import { request, gql } from 'graphql-request'

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
    <Layout pageTitle="keyboards" cardLayout>
      {data.keyboards.map(keyboard => {
        return (
          <Card
            key={keyboard.id}
            src={keyboard.cardImgUrl}
            status={keyboard.status}
            heading={keyboard.name}
            text={keyboard.cardText}
            href={`/keyboards/${keyboard.id}`}
          />
        )
      })}
    </Layout>
  )
}
