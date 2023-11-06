import { Stack } from "@chakra-ui/react";
import { Task } from "./Task/Task";

export const TaskList = ({ todo, setTodo, input, setInput }) => {
  return (
    <Stack gap={5}>
      {todo.map((task, index) => {
        return (
          <Task
            key={index}
            task={task}
            todo={todo}
            setTodo={setTodo}
            input={input}
            setInput={setInput}
          />
        );
      })}
    </Stack>
  );
};
