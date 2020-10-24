import { request, gql } from "graphql-request";

import { Layout } from "../components/layout";

function Page({ title, children }) {
  return (
    <Layout pageTitle={title}>
      <div
        className="Page"
        style={{
          display: "grid",
          gridGap: 20,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: 400,
            margin: "40px 0",
          }}
        >
          {title}
        </h1>
        {children}
      </div>
    </Layout>
  );
}

function CardGrid({ title, children }) {
  return (
    <div
      style={{
        border: "1px solid var(--blue)",
        padding: 20,
      }}
    >
      <h2
        style={{
          fontSize: 32,
          fontWeight: 400,
          marginBottom: 20,
          textTransform: "capitalize",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gridGap: 20,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div
      style={{
        border: "1px solid var(--accent)",
        padding: 20,
      }}
    >
      <h3 style={{ fontSize: 24, fontWeight: 400 }}>{title}</h3>
      {children}
    </div>
  );
}

function TagGrid({ keyboard: { pcb } }) {
  const { pins, hotswap, layout, stabilizers, VIA } = pcb;

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

  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
        gridGap: 4,
        padding: "20px 0",
      }}
    >
      <Tag>{layoutText(layout)}</Tag>
      {hotswap && <Tag>Hotswap</Tag>}
      {VIA && <Tag>VIA</Tag>}
      <Tag>
        {stabilizers === "screw_in" ? "PCB-mount stabs" : "Plate-mount stabs"}
      </Tag>
      <Tag>{pins} pins</Tag>
    </ul>
  );
}

function Tag({ style = {}, children }) {
  return (
    <li
      style={{
        border: "1px solid var(--white)",
        padding: 8,
        ...style,
      }}
    >
      <span>{children}</span>
    </li>
  );
}

function filterKeyboards(data, status) {
  return data.keyboards.filter((keyboard) => keyboard.status === status);
}

export default function Home({ data }) {
  const STATUS_LIST = ["using", "purchased", "shelved"];

  return (
    <Page title="Keyboards">
      {STATUS_LIST.map((status, index) => (
        <CardGrid key={index} title={status}>
          {filterKeyboards(data, status).map((keyboard) => (
            <Card key={keyboard.id} title={keyboard.name}>
              <TagGrid keyboard={keyboard}></TagGrid>
            </Card>
          ))}
        </CardGrid>
      ))}
    </Page>
  );
}

export async function getServerSideProps() {
  const endpoint = process.env.GRAPHQL_ENDPOINT;
  const query = gql`
    query {
      keyboards(sort: "status") {
        id
        name
        status
        pcb {
          pins
          hotswap
          layout
          pins
          stabilizers
          VIA
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
