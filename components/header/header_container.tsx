import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useWindowSize } from "../functions/windowSize";
import Logo from "./logo/container";
import Navigation from "./navigation/nav_container";
import NavigationModalButton from "./navigation/nav_modal_button";
import User from "./user/user_container";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
    };
  }
}

const Container: React.FC = () => {
  const { data: session, status } = useSession();
  const size = useWindowSize();
  const [userModal, setUserModal] = useState(false);
  const [navigationModal, setNavigationModal] = useState(false);
  const navigation_props = {
    status: status,
    width: size?.width,
    visible: navigationModal,
    setVisible: setNavigationModal,
  };
  const logo_props = {
    status: status,
    width: size?.width,
    navigationModal: navigationModal,
    setNavigationModal: setNavigationModal,
    userModal: userModal,
    setUserModal: setUserModal,
  };
  const user_props = {
    id: session ? session?.user?.id : "",
    name: session ? session?.user?.name : "Not Conected",
    email: session ? session?.user?.email : "",
    image: session ? session?.user?.image : "/user-icon.png",
    status: status,
    width: size?.width,
    visible: userModal,
    setVisible: setUserModal,
  };

  return (
    <div className="flex w-screen mb-4 lg:mb-20 justify-between z-20">
      <NavigationModalButton props={navigation_props} />
      <Logo props={logo_props} />
      <Navigation props={navigation_props} />
      <User props={user_props} />
    </div>
  );
};

export default Container;
