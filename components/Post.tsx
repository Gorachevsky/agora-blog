import React from "react";
import Router from "next/router";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
  createdAt: string;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div
      onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}
      className="cursor-pointer rounded-md hover:bg-cyan-600 p-4 mx-6 my-2"
    >
      <h2 className="text-4xl font-bold truncate">{post.title}</h2>
      <p className="text-md m-4">By {authorName}</p>
      <p className="text-lg mx-2 truncate">{post.content}</p>
    </div>
  );
};

export default Post;
