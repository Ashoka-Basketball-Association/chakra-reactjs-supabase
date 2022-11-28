import React from 'react';
import {AuctionPageBanner} from "../../components/AuctionPageBanne/AuctionPageBanner"
import { TierList} from "../../components/TierList/TierList"
import styled from 'styled-components';

const Wrapper = styled.div`
.bg{
  background-color: #eee;
}`;

export const AuctionPage = () => {
  return (
    <Wrapper>
      <div className = "bg">
        <AuctionPageBanner />
        <TierList />
      </div>
    </Wrapper>
  )
};

