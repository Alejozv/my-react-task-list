import { TaskManager } from "./components/TaskManager";
import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Stack, Text } from "@chakra-ui/react";

function App() {
  const { getLocalStorage } = useLocalStorage();
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(getLocalStorage());
  console.log("todo desde app", todo);
  return (
    <Stack>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Lista de Tareas TodoList
      </Text>
      <TaskManager
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
      />
    </Stack>
  );
}

export default App;
