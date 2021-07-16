{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: "TypeScript",
    description: "Studying...📖",
    label: "Study",
    priority: "high",
  };
  console.log(todo);

  const updated = updateTodo(todo, { priority: "low" });
  console.log(updated);
}
