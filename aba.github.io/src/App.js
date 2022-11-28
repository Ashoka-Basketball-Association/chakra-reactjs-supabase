import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Footer } from './components/Footer/Footer';
import { extendTheme } from '@chakra-ui/react';
import { NextUIProvider } from '@nextui-org/react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { AuctionPage } from './pages/Auction/auction';
import { TeamPage } from './pages/Teams/teams'

const theme = extendTheme({
  fonts: {
    body: `'Inter', sans-serif`,
  },
});

function App() {
  return (
    <NextUIProvider>
      <ChakraProvider theme={theme}>
        <Header />
        <div className="container">
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/auction" element={<AuctionPage />} />
              <Route exact path="/teams" element={<TeamPage />} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </ChakraProvider>
    </NextUIProvider>
  );
}

export default App;
