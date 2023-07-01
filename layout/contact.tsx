import React, { ReactNode } from "react";
import Header from "../components/header/header_container";
import Head from "next/head";

type Props = {
  children: ReactNode;
};

const ContactLayout: React.FC<Props> = (props) => (
  <div className="min-h-screen text-white break-words">
    <Head>
      <title>Agora&apos;s Contact</title>
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

export default ContactLayout;
