import React from 'react';
import ComingSoon from '../../components/ComingSoon/GamesComingSoon';
import styled from 'styled-components';
import {GamesGrid} from "../../components/GamesGrid/GamesGrid"

const Wrapper = styled.div`
    .wrap{
        background-color: #eee;
    }
`

export const Games = () => {
  return (
    <Wrapper>
    <div className = "wrap">
      <ComingSoon title="Games" desc=" Here, you can see how your favorite team is performing in the tournament and how they stack up against their competitors. Use this page to stay up to date on the tournament and see which teams are leading the pack. "/>
      <GamesGrid />
    </div>
    </Wrapper>
  );
};

