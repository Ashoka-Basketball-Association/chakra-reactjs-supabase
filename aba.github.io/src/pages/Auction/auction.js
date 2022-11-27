import React from 'react';
import {AuctionPageBanner} from "../../components/AuctionPageBanne/AuctionPageBanner"
import { TierList} from "../../components/TierList/TierList"

export const AuctionPage = () => {
  return (
    <>
        <AuctionPageBanner />
        <TierList />
    </>
  )
};

