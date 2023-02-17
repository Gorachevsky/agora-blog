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
      className="p-3 ml-20 mr-20 cursor-pointer rounded-md hover:bg-cyan-600"
    >
      <h2 className="text-4xl font-bold p-1">{post.title}</h2>
      <small className="p-3 text-lg">By {authorName}</small>
      <ReactMarkdown className="text-xl pl-1">{post.content}</ReactMarkdown>
    </div>
  );
};

export default Post;
