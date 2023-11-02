import { Task } from "./Task/Task";

export const TaskList = ({ todo, setTodo }) => {
  return (
    <section>
      {todo.map((task, index) => {
        return <Task key={index} task={task} todo={todo} setTodo={setTodo} />;
      })}
    </section>
  );
};
