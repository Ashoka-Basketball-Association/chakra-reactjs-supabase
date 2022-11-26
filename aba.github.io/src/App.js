import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Header } from "./components/Header"
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    body: `'Inter', sans-serif`,
    },
  })

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  );
}

export default App;
