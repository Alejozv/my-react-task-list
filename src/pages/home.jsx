import { Stack, Text } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Stack>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="4xl"
        fontWeight="extrabold"
      >
        Bienvenido a tu lista de Tareas Todolist
      </Text>
    </Stack>
  );
};
