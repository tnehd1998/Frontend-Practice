import Head from "next/head";
import { Fragment } from "react";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import Hero from "../components/HomePage/Hero";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>Billy's Blog</title>
        <meta name="description" content="Frontend blog" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
