import Head from "next/head";
import { Header } from "./header";
import styles from "./layout.module.css";

export function Layout({ pageTitle, children }) {
  return (
    <>
      <Head>
        <title>Keebs | {pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.layout}>
        <Header className={styles.header}></Header>

        <main className={styles.content}>{children}</main>
      </div>
    </>
  );
}
