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

const STATUS_LIST = ["using", "purchased", "shelved"];

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
          const layout = layoutText(keyboard.pcb.layout);
          const hotswap = keyboard.pcb.hotswap ? "hotswap" : "soldered";
          const stabilizers =
            keyboard.pcb.stabilizers === "plate_mount"
              ? "plate-mount stabs"
              : "screw-in stabs";

          return (
            <Card
              key={keyboard.id}
              name={keyboard.name}
              status={keyboard.status}
              layout={layout}
              stabilizers={stabilizers}
              hotswap={hotswap}
            />
          );
        })}
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps() {
  const endpoint = process.env.GRAPHQL_ENDPOINT;
  const query = gql`
    query {
      keyboards(sort: "name") {
        id
        name
        status
        pcb {
          pins
          hotswap
          layout
          pins
          stabilizers
          via
        }
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
