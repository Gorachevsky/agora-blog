import React from "react";
import { signOut } from "next-auth/react";
import Router, { useRouter } from "next/router";

const Container: React.FC<{ props: any }> = ({ props }) => {
  const router = useRouter();

  return (
    <div className="w-full bg-gray-600 p-4 rounded-b-xl border-black border-t">
      {props ? (
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
          <div
            className="py-4 mb-2 text-center rounded-xl cursor-pointer hover:bg-black"
            onClick={() => router.push("auth/login")}
          >
            Log in
          </div>
          <div
            className="py-4 text-center rounded-xl cursor-pointer hover:bg-black"
            onClick={() => router.push("/auth/register")}
          >
            Sign in
          </div>
        </div>
      )}
    </div>
  );
};

export default Container;
