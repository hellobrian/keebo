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
        <div>
          {data.keyboards.map((keyboard) => (
            <span key={keyboard.id}>
              {keyboard.name} - {keyboard.hotswap ? "hotswap" : "soldered"}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const endpoint = "http://64.227.84.151/graphql";
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
