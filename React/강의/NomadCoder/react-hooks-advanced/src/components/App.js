import React from "react";
import Add from "./Add";
import { useState } from "../context";
import List from "./List";
import ToDo from "./ToDo";

const App = () => {
  const { toDos, completed } = useState();
  return (
    <>
      <Add />
      <List name={toDos.length !== 0 ? "To Do" : ""}>
        {toDos.map((toDo) => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            isCompleted={true}
          />
        ))}
      </List>
      <List name={completed.length !== 0 ? "Completed" : ""}>
        {completed.map((toDo) => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            isCompleted={false}
          />
        ))}
      </List>
    </>
  );
};

export default App;
