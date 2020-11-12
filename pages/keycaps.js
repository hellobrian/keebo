import { request, gql } from "graphql-request";
import { Grid } from "theme-ui";

import { Layout } from "../components/layout";
import { Card } from "../components/Card/Card";

export default function Keycaps({ data }) {
  return (
    <Layout pageTitle="keycaps">
      <Grid
        sx={{
          gridTemplateColumns: [
            "repeat(auto-fit, minmax(300px, 1fr))",
            null,
            null,
            "repeat(auto-fit, minmax(400px, 1fr))",
          ],
          gridGap: 4,
          p: 1,
          my: 0,
          mx: "auto",
          maxWidth: "1200px",
        }}
      >
        {data.keycaps.map((keycap) => {
          return (
            <Card
              key={keycap.id}
              src={keycap.cardImgUrl || "/JTK-night-sakura.jpg"}
              status={keycap.status}
              heading={keycap.name}
              href="/"
            ></Card>
          );
        })}
      </Grid>
    </Layout>
  );
}

const endpoint = process.env.GRAPHQL_ENDPOINT;
const query = gql`
  query {
    keycaps {
      id
      name
      status
    }
  }
`;

export async function getStaticProps() {
  const data = await request(endpoint, query);

  return {
    props: {
      data,
    },
  };
}
