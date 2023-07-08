import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useWindowSize } from "../functions/windowSize";
import Logo from "../logo/logo_container";
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
    hide: userModal,
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
    hide: navigationModal,
  };

  return (
    <div className="w-screen xl:w-10/12 2xl:w-2/3 3xl:w-1/2 flex justify-center mx-auto">
      <div className="flex w-full mb-14 justify-between z-10">
        <NavigationModalButton props={navigation_props} />
        <Logo animation="header" />
        <Navigation props={navigation_props} />
        <User props={user_props} />
      </div>
    </div>
  );
};

export default Container;
