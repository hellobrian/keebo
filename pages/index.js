import Head from "next/head";
import { request, gql } from "graphql-request";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Keyboards</h1>
        <ul>
          {data.keyboards.map((keyboard) => (
            <li key={keyboard.id}>
              {keyboard.name} - {keyboard.hotswap ? "hotswap" : "soldered"}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const endpoint = process.env.GRAPHQL_ENDPOINT;
  const query = gql`
    query {
      keyboards {
        id
        name
        hotswap
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
