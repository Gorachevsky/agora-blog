import React from "react";
// @ts-ignore
import Post, { PostProps } from "../../../components/post"; // @ts-ignore
import prisma from "../../../lib/prisma";
import PostsLayout from "../../../layout/posts";
import { getSession } from "next-auth/react";

export async function getServerSideProps({req, params} : {req: any; params: any;}) {
  const session: any = await getSession({req});

  if(!session || params?.id !== session?.user?.id) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

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
