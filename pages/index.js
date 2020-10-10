import Head from "next/head";
import { useQuery } from "react-query";

import { request, gql } from "graphql-request";

const endpoint = "http://64.227.84.151/graphql";

function useKeyboardsQuery() {
  return useQuery("keyboards", async () => {
    const res = await request(
      endpoint,
      gql`
        query {
          keyboards {
            id
            name
            hotswap
          }
        }
      `
    );

    return res;
  });
}

function App() {
  const { status, data, error } = useKeyboardsQuery();

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
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

export default function Home() {
  return <App></App>;
}
