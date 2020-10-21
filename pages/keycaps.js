import { request, gql } from "graphql-request";
import { Layout } from "../components/layout";

export default function Home({ data }) {
  return (
    <Layout pageTitle="keycaps">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  );
}

export async function getServerSideProps() {
  const endpoint = process.env.GRAPHQL_ENDPOINT;
  const query = gql`
    query {
      keycaps {
        id
        name
      }
    }
  `;
  const data = await request(endpoint, query);

  return {
    props: {
      data,
    },
  };
}
