import React from "react";
import { GetServerSideProps } from "next";
import Post, { PostProps } from "../../../components/post";
import prisma from "../../../lib/prisma";
import PostsLayout from "../../../layout/posts";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const feed = JSON.parse(
    JSON.stringify(
      await prisma.post.findMany({
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
        where: { published: true, authorId: params?.id as string },
        include: {
          author: {
            select: { name: true },
          },
        },
      })
    )
  );
  return {
    props: { feed },
  };
};

type Props = {
  feed: PostProps[];
};

const Posts: React.FC<Props> = (props) => {
  return (
    <PostsLayout>
      <div className="flex flex-col justify-center items-center">
        {props.feed.map((post) => (
          <div key={post.id} className="mx-4 w-full md:w-2/4">
            <Post post={post} />
          </div>
        ))}
      </div>
    </PostsLayout>
  );
};

export default Posts;
