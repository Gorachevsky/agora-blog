import React, { ReactNode } from "react";
import Header from "../components/header/container";

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = (props) => (
  <div className="min-h-screen text-white break-words">
    <Header />
    <div className="md:mt-6">{props.children}</div>
  </div>
);

export default MainLayout;