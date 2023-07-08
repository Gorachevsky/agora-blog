import React, { ReactNode } from "react";
import { useSession } from "next-auth/react";
import Header from "../components/header/header_container";
import Logo from "../components/logo/logo_container";
import Head from "next/head";

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = (props) => {
  const { status } = useSession();

  return (
    <div className="min-h-screen text-white break-words w-screen">
      {status === "loading" ? (
        <div>
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
        </div>
      ) : (
        <div>
          <Head>
            <title>Agora&apos;s Home</title>
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

          <Header />
          <div className="">{props.children}</div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
