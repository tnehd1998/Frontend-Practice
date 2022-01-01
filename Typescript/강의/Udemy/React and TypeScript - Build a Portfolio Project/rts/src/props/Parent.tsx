import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="white" onClick={() => console.log("Clicked")}>
      dshfl
    </ChildAsFC>
  );
};

export default Parent;
