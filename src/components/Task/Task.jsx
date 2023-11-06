import { useState } from "react";
import taskModule from "./Task.module.css";
import { useTask } from "../../../hooks/useTask";
import { Button, ButtonGroup, Input, Stack, Text } from "@chakra-ui/react";

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
    <Stack direction={"row"} gap={"16px"} width={"500px"}>
      <input type="checkbox" />
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
      >
        {edit ? (
          <Input
            variant="outline"
            size="md"
            type="text"
            value={editText}
            onChange={(event) => setEditText(event.target.value)}
          />
        ) : (
          <Text as="b" color={"#CC72E8"} fontSize={"2xl"}>
            {task.title}
          </Text>
        )}
        <div>
          {edit ? (
            <Button onClick={handleSaveEdit}> Guardar </Button>
          ) : (
            <ButtonGroup>
              <Button
                onClick={handleEdit}
                variant={"outline"}
                size={"sm"}
                colorScheme="purple"
                color={"#8B72E8"}
              >
                Editar
              </Button>
              <Button
                onClick={handleRemove}
                variant={"outline"}
                size={"sm"}
                colorScheme="pink"
                color={"#FF7DF8"}
              >
                Eliminar
              </Button>
            </ButtonGroup>
          )}
        </div>
      </Stack>
    </Stack>
  );
};
