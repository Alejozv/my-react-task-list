import { useState } from "react";
import taskModule from "./Task.module.css";
import { useTask } from "../../../hooks/useTask";

export const Task = ({ task, todo, setTodo, input, setInput }) => {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(task.title);

  const { deleteTask, editTask } = useTask(
    input,
    setTodo,
    setInput,
    todo,
    task,
    editText
  );

  const handleSaveEdit = () => {
    setTodo(editTask);
    setEdit(false);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleRemove = () => {
    deleteTask();
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
