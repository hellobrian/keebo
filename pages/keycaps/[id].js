import { request, gql } from 'graphql-request'
import { Layout } from '../../components/layout'

const endpoint = process.env.GRAPHQL_ENDPOINT

export async function getStaticPaths() {
  const query = gql`
    query {
      keycaps {
        id
      }
    }
  `
  const data = await request(endpoint, query)
  const paths = data.keycaps.map(keycap => {
    return { params: { id: keycap.id } }
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const variables = {
    id: params.id,
  }
  const query = gql`
    query getKeycap($id: ID!) {
      keycap(id: $id) {
        id
        name
        keyboard {
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

export default function Keycap({ data }) {
  return (
    <Layout pageTitle={data.keycap.name}>
      <div>
        <h1>{data.keycap.name}</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </Layout>
  )
}
