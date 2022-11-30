import React from 'react';
import HomePageAbout from '../../components/HomePageAbout/HomePageAbout';
import HomePageBanner from '../../components/HomePageBanner/HomePageBanner';
import HomePageCulture from '../../components/HomePageCulture/HomePageCulture';
import HomePageInstaFeed from '../../components/HomePageInstaFeed/HomePageInstaFeed';

const HomePage = () => {
  return (
    <>
      <HomePageBanner />
      <HomePageAbout />
      {/* <HomePageInstaFeed /> */}
      {/* <HomePageCulture /> */}
    </>
  );
};

export default HomePage;
