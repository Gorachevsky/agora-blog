import React, { useState } from "react";
import Layout from "../components/layout";
import Router from "next/router";

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <form
          onSubmit={submitData}
          className="flex flex-col mx-4 w-full md:w-2/4"
        >
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
            className={
              "bg-black h-8 border-b-solid border-b-2 placeholder-gray-400 focus:border-solid focus:border-2 focus:border-white focus:rounded-md p-2 my-2 mx-6 " +
              (title ? "border-white" : "border-gray-400")
            }
          />
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
            className={
              "bg-black h-10 border-b-solid border-b-2 placeholder-gray-400 focus:border-solid focus:border-2 focus:border-white focus:rounded-md p-2 my-2 mx-6 " +
              (content ? "border-white" : "border-gray-400")
            }
          />
          <div className="flex mx-6">
            {content && title && (
              <input
                className="cursor-pointer bg-white text-black rounded-md p-2 my-4 mr-4"
                type="submit"
                value="Create"
              />
            )}
            <a
              className="border-solid border-2 border-white rounded-md p-2 my-4"
              href="#"
              onClick={() => Router.push("/")}
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Draft;
