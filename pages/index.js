import { request, gql } from "graphql-request";
import { Grid } from "theme-ui";

import { Layout } from "../components/layout";
import { Card } from "../components/Card/Card";

// const layoutText = (text) => {
//   switch (text) {
//     case "seventy_five":
//       return "75%";

//     case "sixty_five":
//       return "65%";

//     case "sixty":
//       return "60%";

//     default:
//       return text;
//   }
// };

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
    revalidate: 1, // In seconds
  };
}

export default function Home({ data }) {
  return (
    <Layout pageTitle="Keyboards">
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
        {data.keyboards.map((keyboard, index) => {
          return (
            <Card
              key={keyboard.id}
              src={keyboard.cardImgUrl}
              status={keyboard.status}
              heading={keyboard.name}
              href="/"
            />
          );
        })}
      </Grid>
    </Layout>
  );
}
