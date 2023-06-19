import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import NavButton from "./nav_button";
import UserModal from "./user_modal/container";
import UserButton from "./user_button";
import Logo from "./agora_logo";

const Container: React.FC = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [userModal, setUserModal] = useState(false);
  const size = useWindowSize();

  function hideModal() {
    setUserModal(false);
  }

  function showModal() {
    setUserModal(true);
  }

  let navIcon = <div></div>;

  if (size?.width! <= 1024 && !userModal) {
    navIcon = (
      <div className="ml-4 sm:ml-8 md:ml-12 mt-4 md:mt-6 text-white m-auto text-4xl cursor-pointer">
        <AiOutlineMenu />
      </div>
    );
  }

  let logo = <div></div>;
  if (size?.width! > 1024 || !showModal) {
    logo = (
      <div className="w-full ml-4 lg:ml-10 mr-8 2xl:w-1/12 flex text-white">
        <div
          className="w-20 mt-3 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Logo />
        </div>
      </div>
    );
  }

  let nav = <div></div>;

  if (size?.width! > 1024) {
    nav = (
      <div className="2xl:w-9/12 flex mt-6">
        <NavButton props={{ title: "Resume", path: "/resume" }} />
        <NavButton props={{ title: "Docs", path: "/docs" }} />
        <NavButton props={{ title: "Blog", path: "/blog" }} />
        <NavButton props={{ title: "Contact", path: "/contact" }} />
      </div>
    );
  }

  let user = (
    <div className="w-full flex justify-end">
      {status === "loading" && (
        <p className="p-4 px-8">Validating session...</p>
      )}
      {session ? (
        <div
          className="relative w-full sm:mr-2"
          onMouseOver={showModal}
          onMouseLeave={hideModal}
        >
          <UserButton
            props={session?.user}
            visible={userModal}
            width={size.width}
          />
          {userModal && <UserModal props={session?.user} width={size.width} />}
        </div>
      ) : (
        <div
          className={`relative sm:mr-2 ${
            userModal ? "w-full lg:w-auto md:w-1/2 ml-2 h-full" : ""
          }`}
          onMouseOver={showModal}
          onMouseLeave={hideModal}
        >
          <UserButton
            props={{ image: "/user-icon.png" }}
            visible={userModal}
            width={size.width}
          />
          {userModal && <UserModal props="" width={size.width} />}
        </div>
      )}
    </div>
  );

  return (
    <nav className="h-18 mb-8 flex justify-between">
      <div className="flex 2xl:w-10/12 w-full mx-auto justify-between">
        {navIcon}
        {logo}
        {nav}
        {user}
      </div>
    </nav>
  );
};

export default Container;

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
