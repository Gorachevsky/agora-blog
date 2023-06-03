import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./header/container";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="min-h-screen text-white break-words">
    <Head>
      <title>i-hate-my-life.com</title>
      <meta
        name="description"
        content="A mini blog about my travel adventures"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/agora-icon.ico" />
    </Head>
    <Header />
    <div className="md:mt-6">{props.children}</div>
  </div>
);

export default Layout;
