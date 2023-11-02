import { Input } from "./Input/Input";
import { TaskList } from "./Tasklist";

export const TaskManager = ({ input, setInput, todo, setTodo }) => {
  console.log("todo desde taskManager", todo);
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Input input={input} setInput={setInput} todo={todo} setTodo={setTodo} />
      <TaskList todo={todo} setTodo={setTodo} />
    </section>
  );
};
