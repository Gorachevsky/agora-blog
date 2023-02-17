import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  let left = (
    <div className="left">
      <Link href="/" legacyBehavior>
        <a className="bold" data-active={isActive("/")}>
          Feed
        </a>
      </Link>
      <Link href="/drafts" legacyBehavior>
        <a data-active={isActive("/drafts")}>My drafts</a>
      </Link>
    </div>
  );

  let right = (
    <div className="right">
      <Link href="/create" legacyBehavior>
        <button>
          <a>New post</a>
        </button>
      </Link>
    </div>
  );

  return (
    <nav>
      {left}
      {right}
    </nav>
  );
};

export default Header;
