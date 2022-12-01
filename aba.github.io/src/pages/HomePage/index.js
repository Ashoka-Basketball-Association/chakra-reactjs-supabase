import React from 'react';
import HomePageAbout from '../../components/HomePage/HomePageAbout/HomePageAbout';
import HomePageBanner from '../../components/HomePage/HomePageBanner/HomePageBanner';
import HomePageCulture from '../../components/HomePage/HomePageCulture/HomePageCulture';
import HomePageInstaFeed from '../../components/HomePage/HomePageInstaFeed/HomePageInstaFeed';
import HomePagePrizes from '../../components/HomePage/HomePagePrizes/HomePagePrizes';
import NewsTicker from '../../components/NewsTicker/NewsTicker';
// import { QuickNews } from "../../components/QuickNews/QuickNews"

const HomePage = () => {
  return (
    <>
      {/* <QuickNews /> */}
      <NewsTicker />
      <HomePageBanner />
      <HomePageAbout />
      {/* <HomePageInstaFeed /> */}
      <HomePageCulture />
      <HomePagePrizes />
    </>
  );
};

export default HomePage;
