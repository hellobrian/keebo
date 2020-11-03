import { useQuery } from "react-query";
import { request, gql } from "graphql-request";
import { Grid } from "theme-ui";

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

const KEYBOARDS_IS_DARK = [
  "anne pro 2",
  "drop ctrl high-profile",
  "keychron k2",
  "nk65 milkshake",
];

const endpoint = process.env.GRAPHQL_ENDPOINT;
const query = gql`
  query {
    keyboards {
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

export async function getServerSideProps() {
  const data = await getKeyboards();
  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <Layout title="Keyboards">
      <Grid
        sx={{
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          m: "0 auto",
          maxWidth: "1200px",
        }}
      >
        {data.keyboards.map((keyboard) => {
          return (
            <Card
              isDark={KEYBOARDS_IS_DARK.includes(keyboard.name.toLowerCase())}
              key={keyboard.id}
              pins={keyboard.pcb.pins}
              name={keyboard.name}
              status={keyboard.status}
              heroImg={keyboard.cardImgUrl}
            />
          );
        })}
      </Grid>
    </Layout>
  );
}
