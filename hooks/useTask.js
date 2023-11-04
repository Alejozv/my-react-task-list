export const useTask = (input, setTodo, setInput, todo, task, editText) => {
  const inputData = {
    id: new Date().getTime(),
    title: input,
  };

  const addTask = () => {
    if (input) {
      setTodo([inputData, ...todo]);
      setInput("");
    }
  };

  const deleteTask = () => {
    const removeTask = todo.filter((item) => item.id !== task.id);
    setTodo(removeTask);
  };

  const editTask = () => {
    const updateTask = todo.map((item) => {
      if (item.id === task.id) {
        return {
          ...item,
          title: editText,
        };
      }
      return item;
    });
    return updateTask;
  };

  return { addTask, deleteTask, editTask };
};
