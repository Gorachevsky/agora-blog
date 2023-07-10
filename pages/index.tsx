import MainLayout from "../layout/main";
import { GetServerSideProps } from "next";
import Post, { PostProps } from "../components/post";
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
        <div className="flex flex-col items-center h-screen">
          {props.feed.map((post) => (
            <div key={post.id} className="mx-4 w-full md:w-2/4">
              <Post post={post} />
            </div>
          ))}
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
