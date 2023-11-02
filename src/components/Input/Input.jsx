import { useEffect } from "react";
import form from "./Input.module.css";

export const Input = ({ input, setInput, todo, setTodo }) => {
  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo(addTask);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <form className={form.form} onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className={form.input}
        type="text"
        placeholder="Que tienes planeado para hoy?"
        value={input}
      />
      <button className={form.button}>Agregar Tarea</button>
    </form>
  );
};
