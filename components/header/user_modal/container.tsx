import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Container: React.FC<{ props: any }> = ({ props }) => {
  const router = useRouter();

  return (
    <div className="w-full bg-gray-600 p-4 rounded-b-xl border-black border-t">
      {props ? (
        <div>
          <div
            className="py-4 mb-2 text-center rounded-xl cursor-pointer hover:bg-black"
            onClick={() => router.push("/profile")}
          >
            Profile
          </div>
          <div
            className="py-4 mb-2 text-center rounded-xl cursor-pointer hover:bg-black"
            onClick={() => router.push("/posts")}
          >
            My posts
          </div>
          <div
            className="py-4 mb-2 text-center rounded-xl cursor-pointer hover:bg-black"
            onClick={() => router.push("/settings")}
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
            onClick={() => router.push("/login")}
          >
            Log in
          </div>
          <div
            className="py-4 text-center rounded-xl cursor-pointer hover:bg-black"
            onClick={() => router.push("/register")}
          >
            Sign in
          </div>
        </div>
      )}
    </div>
  );
};

export default Container;
