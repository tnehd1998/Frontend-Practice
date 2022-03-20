import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of postings" />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
