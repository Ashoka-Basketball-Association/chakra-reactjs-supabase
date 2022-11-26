import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Footer } from "./components/Footer"
import { extendTheme } from "@chakra-ui/react"
import { NextUIProvider } from '@nextui-org/react';

const theme = extendTheme({
  fonts: {
    body: `'Inter', sans-serif`,
    },
  })

function App() {
  return (
    <NextUIProvider>
    <ChakraProvider theme={theme}>
      <Footer />
    </ChakraProvider>
    </NextUIProvider>
  );
}

export default App;
