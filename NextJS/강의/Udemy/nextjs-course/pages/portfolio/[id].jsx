import { useRouter } from "next/router";
import React from "react";

const Project = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Project {router.query.id}</h1>
    </div>
  );
};

export default Project;
