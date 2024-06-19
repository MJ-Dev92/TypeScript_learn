{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateToDo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: "lean TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  };
  const update = updateToDo(todo, {
    description: "study easy",
    label: "lag study",
    priority: "low",
  });

  console.log(update);
}
