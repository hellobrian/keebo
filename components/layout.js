import Head from "next/head";
import { Header } from "./header";

export function Layout({ pageTitle, children }) {
  return (
    <>
      <Head>
        <title>Keebs | {pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
