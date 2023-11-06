import { Link, Stack, Text } from "@chakra-ui/react";

export const Menu = () => {
  return (
    <Stack direction={"row"}>
      <Link style={{ padding: "2px 4px" }} color="#FF7DF8" href="/">
        <Text as={"b"}>Home</Text>
      </Link>
      <Link
        style={{ padding: "2px 4px" }}
        color="#FF7DF8"
        href="/sobrenosotros"
      >
        <Text as={"b"}>Sobre Nosotros</Text>
      </Link>
      <Link style={{ padding: "2px 4px" }} color="#FF7DF8" href="/tareas">
        <Text as={"b"}>Tareas</Text>
      </Link>
    </Stack>
  );
};
