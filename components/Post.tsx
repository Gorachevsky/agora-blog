import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div
      onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}
      className="container cursor-pointer rounded-md hover:bg-cyan-600"
    >
      <h2 className="whitespace-normal text-4xl font-bold p-1">{post.title}</h2>
      <small className="p-3 text-lg">By {authorName}</small>
      <p className="text-xl pl-1">{post.content}</p>
    </div>
  );
};

export default Post;
