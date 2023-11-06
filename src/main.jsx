import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import { SobreNosotros } from "./pages/sobreNosotros.jsx";
import { Tareas } from "./pages/tareas.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/sobrenosotros" element={<SobreNosotros />} />
            <Route path="/tareas" element={<Tareas />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
