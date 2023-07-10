import React from "react";
import Router from "next/router";
import styles from "../../styles/components/Post.module.css";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  testeaso: string;
  published: boolean;
  createdAt: string;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div
      onClick={() => Router.push("/posts/[id]", `/posts/${post.id}`)}
      className={styles.container}
      key={post.id}
    >
      <h2>{post.title}</h2>
      <p>By {authorName}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
