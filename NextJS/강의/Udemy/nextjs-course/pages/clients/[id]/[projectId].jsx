import { useRouter } from "next/router";

const SelectedClientProject = () => {
  const router = useRouter();
  const { id, projectId } = router.query;

  return (
    <div>
      <h1>Selected Client Project : {`${id}/${projectId}`}</h1>
    </div>
  );
};

export default SelectedClientProject;
