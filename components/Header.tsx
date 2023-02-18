import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const path = router.pathname;
  console.log(path);

  let left = (
    <div className="w-1/3 flex">
      {(path === "/drafts" || path === "/create" || path === "/p/[id]") && (
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

  let right = (
    <div className="w-1/3 flex justify-end">
      {path != "/create" && (
        <Link href="/create" legacyBehavior>
          <button className="border-solid border-2 border-white rounded-md p-2 m-2 md:mr-10 md:mt-4">
            <a>New post</a>
          </button>
        </Link>
      )}
    </div>
  );

  return (
    <nav className="flex">
      {left}
      {center}
      {right}
    </nav>
  );
};

export default Header;
