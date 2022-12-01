import React from 'react';
import HomePageAbout from '../../components/HomePageAbout/HomePageAbout';
import HomePageBanner from '../../components/HomePageBanner/HomePageBanner';
import HomePageCulture from '../../components/HomePageCulture/HomePageCulture';
import HomePageInstaFeed from '../../components/HomePageInstaFeed/HomePageInstaFeed';
import HomePagePrizes from '../../components/HomePagePrizes/HomePagePrizes';
import NewsTicker from '../../components/NewsTicker/NewsTicker';
// import { QuickNews } from "../../components/QuickNews/QuickNews"

const HomePage = () => {
  return (
    <>
      {/* <QuickNews /> */}
      <HomePageBanner />
      <HomePageAbout />
      {/* <HomePageInstaFeed /> */}
      <HomePageCulture />
      <HomePagePrizes />
      <NewsTicker />
    </>
  );
};

export default HomePage;
