import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "../components/Layout";
import styles from "@/styles/Home.module.css";
import { GetStaticProps } from "next";
import Post, { PostProps } from "../components/Post";
import prisma from "../lib/prisma";

const inter = Inter({ subsets: ["latin"] });

// index.tsx
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
      {props.feed.map((post) => (
        <div key={post.id} className="m-16">
          <Post post={post} />
        </div>
      ))}
    </Layout>
  );
};

export default Home;
