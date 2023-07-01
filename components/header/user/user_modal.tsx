import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Router from "next/router";

const Container: React.FC<{ props: any }> = ({ props }) => {
  return (
    <div className="w-full h-screen md:h-auto bg-gray-600 p-4 rounded-b-xl border-black border-t absolute mr-2">
      {props?.id ? (
        <div>
          <div
            className="py-4 mb-2 text-center rounded-xl cursor-pointer hover:bg-black"
            onClick={() =>
              Router.push("/user/profile/[id]", `/user/profile/${props.id}`)
            }
          >
            Profile
          </div>
          <div
            className="py-4 mb-2 text-center rounded-xl cursor-pointer hover:bg-black"
            onClick={() =>
              Router.push("/user/posts/[id]", `/user/posts/${props.id}`)
            }
          >
            Posts
          </div>
          <div
            className="py-4 mb-2 text-center rounded-xl cursor-pointer hover:bg-black"
            onClick={() =>
              Router.push("/user/settings/[id]", `/user/settings/${props.id}`)
            }
          >
            Settings
          </div>
          <div
            className="py-4 rounded-xl hover:bg-black text-center cursor-pointer"
            onClick={() => signOut()}
          >
            Log out
          </div>
        </div>
      ) : (
        <div>
          <Link href={"/auth/login"}>
            <div className="py-4 mb-2 text-center rounded-xl cursor-pointer hover:bg-black">
              Log in
            </div>
          </Link>
          <Link href={"/auth/register"}>
            <div className="py-4 text-center rounded-xl cursor-pointer hover:bg-black">
              Sign up
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Container;
