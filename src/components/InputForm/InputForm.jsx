import { useEffect } from "react";
import styles from "./InputForm.module.css";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { useTask } from "../../../hooks/useTask";
import { Button, Input } from "@chakra-ui/react";

export const InputForm = ({ input, setInput, todo, setTodo }) => {
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        className={styles.input}
        type="text"
        placeholder="Escribe tu nueva Tarea"
        value={input}
        required
      />
      <Button
        colorScheme="purple"
        variant={"ghost"}
        width={"250px"}
        type="submit"
      >
        Agregar Tarea
      </Button>
    </form>
  );
};
