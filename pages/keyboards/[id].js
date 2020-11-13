import { request, gql } from "graphql-request";
import { Layout } from "../../components/layout";
const endpoint = process.env.GRAPHQL_ENDPOINT;

export async function getStaticPaths() {
  const query = gql`
    query {
      keyboards {
        id
      }
    }
  `;
  const data = await request(endpoint, query);
  const paths = data.keyboards.map((keyboard) => {
    return { params: { id: keyboard.id } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const variables = {
    id: params.id,
  };
  const query = gql`
    query getKeyboard($id: ID!) {
      keyboard(id: $id) {
        id
        name
      }
    }
  `;
  const data = await request(endpoint, query, variables);
  console.log(data);
  return {
    props: { data },
  };
}

export default function Keyboard({ data }) {
  console.log({ data });
  return (
    <Layout pageTitle={data.keyboard.name}>
      <div>
        <h1>{data.keyboard.name}</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </Layout>
  );
}
