import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import NavButton from "./nav_button";
import UserModal from "./user_modal/container";
import UserButton from "./user_button";

const Container: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;
  const path = router.pathname;
  const { data: session, status } = useSession();
  const [userModal, setUserModal] = useState(false);

  function hideModal() {
    setUserModal(false);
  }

  function showModal() {
    setUserModal(true);
  }

  let left = (
    <div className="w-2/12 flex">
      <div
        className="w-38 mx-auto my-4 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <span>
          <Image
            src="/agora-logo.png"
            width={100}
            height={100}
            alt="Picture of the author"
            className="rounded-full pointer-events-none	select-none"
          />
        </span>
      </div>
    </div>
  );

  let center = (
    <div className="w-7/12 flex">
      <NavButton props={{ title: "Resume" }} />
      <NavButton props={{ title: "Docs" }} />
      <NavButton props={{ title: "Blog" }} />
      <NavButton props={{ title: "Contact" }} />
    </div>
  );

  let right = (
    <div className="w-3/12 flex justify-end">
      {status === "loading" && (
        <div className="relative mt-2 mr-8">
          <p className="p-4 px-8">Validating session...</p>
        </div>
      )}
      {session ? (
        <div
          className="relative mt-2 mr-8"
          onMouseOver={showModal}
          onMouseLeave={hideModal}
        >
          <UserButton props={session?.user} visible={userModal} />
          {userModal && <UserModal props={session?.user} />}
        </div>
      ) : (
        <div
          className="relative mt-2 mr-8"
          onMouseOver={showModal}
          onMouseLeave={hideModal}
        >
          <UserButton
            props={{ image: "/agora-icon.ico" }}
            visible={userModal}
          />
          {userModal && <UserModal props="" />}
        </div>
      )}
    </div>
  );

  return (
    <nav className="h-16 flex">
      {left}
      {center}
      {right}
    </nav>
  );
};

export default Container;
