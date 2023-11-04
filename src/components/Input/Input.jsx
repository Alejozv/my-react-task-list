import { useEffect } from "react";
import form from "./Input.module.css";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { useTask } from "../../../hooks/useTask";

export const Input = ({ input, setInput, todo, setTodo }) => {
  const { setLocalStorage } = useLocalStorage(todo);
  const { addTask } = useTask(input, setTodo, setInput, todo);

  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.length < 3) {
      alert("Input debe tener por lo menos más de 3 carácteres.");
      return;
    } else {
      setTodo(addTask);
    }
  };

  useEffect(() => {
    setLocalStorage();
  }, [setLocalStorage]);

  return (
    <form className={form.form} onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className={form.input}
        type="text"
        placeholder="Que tienes planeado para hoy?"
        value={input}
        required
      />
      <button className={form.button}>Agregar Tarea</button>
    </form>
  );
};
