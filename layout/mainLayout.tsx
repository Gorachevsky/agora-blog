import React, { ReactNode } from "react";
import Header from "../components/Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="min-h-screen text-white break-words">
    <Header />
    <div className="md:mt-6">{props.children}</div>
  </div>
);

export default Layout;
