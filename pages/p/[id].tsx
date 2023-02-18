import React from "react";
import { GetServerSideProps } from "next";
import Router from "next/router";
import Layout from "../../components/Layout";
import { PostProps } from "../../components/Post";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  console.log(post);
  return {
    props: await JSON.parse(JSON.stringify(post)),
  };
};

async function publishPost(id: string): Promise<void> {
  await fetch(`/api/publish/${id}`, {
    method: "PUT",
  });
  await Router.push("/");
}

async function deletePost(id: string): Promise<void> {
  await fetch(`/api/post/${id}`, {
    method: "DELETE",
  });
  Router.push("/");
}

const Post: React.FC<PostProps> = (props) => {
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  /*let postDate = ''
  if(props.createdAt != null) {
    postDate = props.createdAt.
  }*/

  return (
    <Layout>
      <div className="flex justify-center items-center">
        <div className="md:w-2/3 mx-8">
          <h2 className="text-4xl font-bold my-4">{title}</h2>
          <p className="ml-2 italic text-gray-400">
            By {props?.author?.name || "Unknown author"} |{" "}
            {props?.createdAt?.substring(0, 10) || ""}
          </p>
          <p className="ml-2 my-4 whitespace-normal">{props.content}</p>
          {!props.published && (
            <button
              onClick={() => publishPost(props.id)}
              className="border-solid border-2 border-white rounded-md p-2 mt-2 mr-4 md:mt-4"
            >
              Publish
            </button>
          )}
          <button
            onClick={() => deletePost(props.id)}
            className="border-solid border-2 border-white rounded-md p-2 mt-2 md:mt-4"
          >
            Delete
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
