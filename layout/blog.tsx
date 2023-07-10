import React, { ReactNode } from "react";
import { useSession } from "next-auth/react";
import styles from "../styles/layouts/Blog.module.css";
import Header from "../components/header/header_container";
import Logo from "../components/logo/logo_container";
import Head from "next/head";

type Props = {
  children: ReactNode;
};

const BlogLayout: React.FC<Props> = (props) => {
  const { status } = useSession();

  return (
    <>
      {status === "loading" ? (
        <>
          <Head>
            <title>Loading...</title>
            <meta name="description" content="loading content" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/agora-icon.ico" />
          </Head>
          <div className="h-screen w-screen flex">
            <Logo animation="loader" />
          </div>
        </>
      ) : (
        <div className={styles.layout}>
          <Head>
            <title>Agora&apos;s Blog</title>
            <meta
              name="description"
              content="A mini blog about my travel adventures"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/agora-icon.ico" />
          </Head>
          <div className={styles.layout_background}>
            <Header />
            <div className={styles.layout_container}>{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogLayout;
