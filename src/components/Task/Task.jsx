import { useState } from "react";
import taskModule from "./Task.module.css";

export const Task = ({ task, todo, setTodo }) => {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(task.title);

  const handleSaveEdit = () => {
    const updateTask = todo.map((item) => {
      if (item.id === task.id) {
        return {
          ...item,
          title: editText,
        };
      }
      return item;
    });
    setTodo(updateTask);
    setEdit(false);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleRemove = () => {
    const removeTask = todo.filter((item) => item.id !== task.id);
    setTodo(removeTask);
  };
  return (
    <div className={taskModule.taskContainer}>
      <input type="checkbox" />
      <div className={taskModule.task}>
        {edit ? (
          <input
            type="text"
            value={editText}
            onChange={(event) => setEditText(event.target.value)}
          />
        ) : (
          <h4>{task.title}</h4>
        )}
        <div>
          {edit ? (
            <button onClick={handleSaveEdit}> Guardar </button>
          ) : (
            <div>
              <button onClick={handleEdit}>Editar</button>
              <button onClick={handleRemove}>Eliminar</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
