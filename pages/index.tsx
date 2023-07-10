import MainLayout from "../layout/main";
import { GetServerSideProps } from "next";
import Post, { PostProps } from "../components/post/post";
import prisma from "../lib/prisma";

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = JSON.parse(
    JSON.stringify(
      await prisma.post.findMany({
        orderBy: [
          {
            createdAt: "asc",
          },
        ],
        where: { published: true },
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

const Home: React.FC<Props> = (props) => {
  return (
    <>
      <MainLayout>
        {props.feed.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </MainLayout>
    </>
  );
};

export default Home;
