import { TaskManager } from "./components/TaskManager";
import { Layout } from "./components/Layout/Layout";
import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

function App() {
  const { getLocalStorage } = useLocalStorage();
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(getLocalStorage());
  console.log("todo desde app", todo);
  return (
    <Layout>
      <article style={{ textAlign: "center" }}>
        <h1>Lista de Tareas</h1>
        <p>Se han completado 2 de 5 tareas</p>
      </article>
      <TaskManager
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
      />
    </Layout>
  );
}

export default App;
