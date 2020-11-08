/** @jsx jsx */
import { Text, jsx } from "theme-ui";
import { request, gql } from "graphql-request";
import { Layout } from "../components/layout";

export default function Home({ data }) {
  return (
    <Layout pageTitle="switches">
      <h1>Switches</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Text>hello</Text>
      <div sx={{ backgroundColor: "primary", color: "white", p: 4 }}>
        tomato
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const endpoint = process.env.GRAPHQL_ENDPOINT;
  const query = gql`
    query {
      switches {
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
