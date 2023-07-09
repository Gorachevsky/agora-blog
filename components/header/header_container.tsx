import React, { useState, useContext } from "react";
import { useSession } from "next-auth/react";
import Logo from "../logo/logo_container";
import Navigation from "./navigation/nav_container";
import NavigationModalButton from "./navigation/nav_modal_button";
import User from "./user/user_container";
import { SizeContext } from "../../utils/size_observer";
import { ScrollContext } from "../../utils/scroll_observer";

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
  const { innerWidth } = useContext(SizeContext);
  const { scrollY } = useContext(ScrollContext);
  console.log(scrollY);
  const [userModal, setUserModal] = useState(false);
  const [navigationModal, setNavigationModal] = useState(false);
  const navigation_props = {
    status: status,
    width: innerWidth,
    visible: navigationModal,
    setVisible: setNavigationModal,
    hide: userModal,
  };
  const user_props = {
    id: session ? session?.user?.id : "",
    name: session ? session?.user?.name : "Not Conected",
    email: session ? session?.user?.email : "",
    image: session ? session?.user?.image : "/user-icon.png",
    status: status,
    width: innerWidth,
    visible: userModal,
    setVisible: setUserModal,
    hide: navigationModal,
  };

  return (
    <div className="w-screen xl:w-10/12 2xl:w-2/3 3xl:w-1/2 flex justify-center mx-auto">
      <div className="flex w-full mb-5 justify-between z-10 fixed">
        <NavigationModalButton props={navigation_props} />
        <Logo animation="header" />
        <Navigation props={navigation_props} />
        <User props={user_props} />
      </div>
    </div>
  );
};

export default Container;
