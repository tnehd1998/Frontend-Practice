import { useRouter } from "next/router";
import React from "react";

const Blog = () => {
  const router = useRouter();
  const { id } = router.query;
  const url = id.join("/");

  return (
    <div>
      <h1>Blog : {url}</h1>
    </div>
  );
};

export default Blog;
