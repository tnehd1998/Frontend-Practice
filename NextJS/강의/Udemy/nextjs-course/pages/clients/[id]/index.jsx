import { useRouter } from "next/router";

const ClientProjects = () => {
  const router = useRouter();
  const { id } = router.query;

  const handleLoadProject = () => {
    router.push({
      pathname: "/clients/[id]/[projectId]",
      query: { id: "billy", projectId: "projecta" },
    });
  };

  return (
    <div>
      <h1>Client Projects : {id}</h1>
      <button onClick={handleLoadProject}>Load Project A</button>
    </div>
  );
};

export default ClientProjects;
