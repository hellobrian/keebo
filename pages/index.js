import { request, gql } from "graphql-request";
import { Grid, Text } from "theme-ui";

import { Layout } from "../components/layout";
import { Card } from "../components/Card/Card";

const layoutText = (text) => {
  switch (text) {
    case "seventy_five":
      return "75%";

    case "sixty_five":
      return "65%";

    case "sixty":
      return "60%";

    default:
      return text;
  }
};

const endpoint = process.env.GRAPHQL_ENDPOINT;
const query = gql`
  query {
    keyboards(sort: "name") {
      id
      name
      status
      cardImgUrl
      pcb {
        pins
      }
    }
  }
`;

async function getKeyboards() {
  const data = await request(endpoint, query);
  return data;
}

export async function getStaticProps() {
  const data = await getKeyboards();
  return {
    props: { data },
  };
}

export default function Home({ data }) {
  return (
    <Layout title="Keyboards">
      <Grid
        sx={{
          gridGap: 5,
          py: 4,
          px: 2,
          my: 0,
          mx: "auto",
          maxWidth: "1200px",
        }}
      >
        {data.keyboards.map((keyboard) => {
          return (
            <Card
              key={keyboard.id}
              src={keyboard.cardImgUrl}
              status={keyboard.status}
              heading={keyboard.name}
              href="/"
            ></Card>
          );
        })}
      </Grid>
    </Layout>
  );
}
