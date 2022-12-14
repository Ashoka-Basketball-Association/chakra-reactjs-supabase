import React from 'react';
import { ChakraProvider, Highlight } from '@chakra-ui/react';
import { Footer } from './components/Footer/Footer';
import { extendTheme } from '@chakra-ui/react';
import { NextUIProvider } from '@nextui-org/react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { AuctionPage } from './pages/Auction/auction';
import { TeamPage } from './pages/Teams/teams';
import { Games } from './pages/Games/Games';
import { CourtBooking } from './pages/CourtBooking/CourtBooking';
import { SponsorPage } from './pages/SponsorPage/SponsorPage';
import { Archive } from './pages/Archive/Archive';
import { HighlightsPage } from './components/HighlightsPage/HighlightsPage';
import {EachGame} from "./pages/Games/EachGame"

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
              <Route exact path="/court-booking" element={<CourtBooking />} />
              <Route exact path="/sponsors" element={<SponsorPage />} />
              <Route exact path="/games" element={<Games />} />
              <Route exact path="/archive" element={<Archive />} />
              <Route path="/games/:gameId" element={<EachGame />} />
              {/* <Route exact path="/highlights" element={<HighlightsPage />} /> */}
            </Routes>
          </Router>
        </div>
        <Footer />
      </ChakraProvider>
    </NextUIProvider>
  );
}

export default App;
