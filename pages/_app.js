import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const myApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default myApp;
