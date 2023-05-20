import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;
  const path = router.pathname;
  const { data: session, status } = useSession();
  console.log('session: ',session);

  let left = (
    <div className="w-1/3 flex">
      {(path === "/drafts" || path === "/create" || path === "/posts/[id]") && (
        <Link href="/" legacyBehavior>
          <a
            data-active={isActive("/")}
            className="border-solid border-2 border-white rounded-md p-2 m-2 md:ml-10 md:mt-4"
          >
            Feed
          </a>
        </Link>
      )}
      {path === "/" && (
        <Link href="/drafts" legacyBehavior>
          <a
            data-active={isActive("/drafts")}
            className="border-solid border-2 border-white rounded-md p-2 m-2 md:ml-10 md:mt-4"
          >
            Drafts
          </a>
        </Link>
      )}
    </div>
  );

  let center = <div className="w-1/3"></div>;

  if (path === "/") {
    center = (
      <div className="w-1/3 flex justify-center items-center text-2xl font-bold">
        Feed
      </div>
    );
  } else if (path === "/drafts") {
    center = (
      <div className="w-1/3 flex justify-center items-center text-2xl font-bold">
        Drafts
      </div>
    );
  } else if (path === "/create") {
    center = (
      <div className="w-1/3 flex justify-center items-center text-2xl font-bold">
        New Post
      </div>
    );
  }

  let right = <div className="w-1/3 flex justify-end"></div>;

  if (status === "loading") {
    right = (
      <div className="w-1/3 flex justify-end">
        <p>Validating session...</p>
      </div>
    );
  } else if (!session) {
    right = (
      <div className="w-1/3 flex justify-end">
        <Link href="/login">
          <button className="border-solid border-2 border-white rounded-md p-2 m-2 md:mr-10 md:mt-4">
            Log in
          </button>
        </Link>
      </div>
    );
  } else if (session && path != "/create") {
    right = (
      <div className="w-1/3 flex justify-end">
        <p>
          {session?.user?.name} ({session?.user?.email})
        </p>
        <Link href="/create" legacyBehavior>
          <button className="border-solid border-2 border-white rounded-md p-2 m-2 md:mr-4 md:mt-4">
            <a>New post</a>
          </button>
        </Link>
        <button
          className="border-solid border-2 border-white rounded-md p-2 m-2 md:mr-10 md:mt-4"
          onClick={() => signOut()}
        >
          <a>Log out</a>
        </button>
      </div>
    );
  }

  return (
    <nav className="flex">
      {left}
      {center}
      {right}
    </nav>
  );
};

export default Header;
