import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/layout";
import Post, { PostProps } from "../components/post";
import prisma from "../lib/prisma";

export const getServerSideProps: GetServerSideProps = async () => {
  const drafts = JSON.parse(
    JSON.stringify(
      await prisma.post.findMany({
        where: { published: false },
        include: {
          author: {
            select: { name: true },
          },
        },
      })
    )
  );
  return {
    props: { drafts },
  };
};

type Props = {
  drafts: PostProps[];
};

const Drafts: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        {props.drafts.map((post) => (
          <div key={post.id} className="mx-4 w-full md:w-2/4">
            <Post post={post} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Drafts;
