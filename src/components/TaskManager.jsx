import { Stack } from "@chakra-ui/react";
import { InputForm } from "./InputForm/InputForm";
import { TaskList } from "./Tasklist";

export const TaskManager = ({ input, setInput, todo, setTodo }) => {
  console.log("todo desde taskManager", todo);
  return (
    <Stack alignItems={"center"} gap={15}>
      <InputForm
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
      />
      <TaskList
        todo={todo}
        setTodo={setTodo}
        input={input}
        setInput={setInput}
      />
    </Stack>
  );
};
