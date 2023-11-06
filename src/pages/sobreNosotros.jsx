import { Center, Stack, Text } from "@chakra-ui/react";

export const SobreNosotros = () => {
  return (
    <Stack>
      <Text
        color={"#C38AFF"}
        fontSize="xl"
        fontWeight="bold"
        width={"600px"}
        gap={15}
      >
        Todolist es una aplicacion hecha con el framework React, Chakra, React
        Router Dom y lo Hook de estado de React como useEffect y useState. Esta
        aplicacion es sencilla y facil de usa esta dirigida al publico general
        para que haga una mejor gestion de sus tareas.
      </Text>
    </Stack>
  );
};
