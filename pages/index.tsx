import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import Post, { PostProps } from "../components/Post";
import prisma from "../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

type Props = {
  feed: PostProps[];
};

const Home: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        {props.feed.map((post) => (
          <div key={post.id} className="mx-4 w-full md:w-2/4">
            <Post post={post} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
