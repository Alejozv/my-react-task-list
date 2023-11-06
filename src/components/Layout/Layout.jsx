import { Button, Stack, useColorMode } from "@chakra-ui/react";
import { Menu } from "./Menu";

export const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack alignItems={"center"} paddingTop={4}>
      <Button onClick={toggleColorMode} position={"absolute"} right={4}>
        Mode: {colorMode === "light" ? "Light" : "Dark"}
      </Button>
      <Menu />
      {children}
    </Stack>
  );
};
