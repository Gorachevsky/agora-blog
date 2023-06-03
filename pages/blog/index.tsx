import React from "react";
import BlogLayout from "../../layout/blog";

const Blog: React.FC<{}> = () => {
  return (
    <>
      <BlogLayout>
        <section className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 mx-auto px-6 sm:px-0 flex flex-col gap-10">
          Blog
        </section>
      </BlogLayout>
    </>
  );
};

export default Blog;
