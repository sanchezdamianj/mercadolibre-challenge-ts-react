import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider, Helmet } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <ChakraProvider>
        <Helmet>
          <title>ML Frontend Challenge</title>
          <meta
            name="description"
            content="Mercado Libre FrontEnd App using React, TypeScript, SASS, Vite, Clean Architecture, API requests. JEST for unit testinf and Cypress for e2e testing."
          />
          ;
        </Helmet>
        <App />
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
);
