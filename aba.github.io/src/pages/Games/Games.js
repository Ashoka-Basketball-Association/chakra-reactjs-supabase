import React from 'react';
import ComingSoon from '../../components/ComingSoon/GamesComingSoon';
import styled from 'styled-components';

const Wrapper = styled.div`
    .wrap{
        background-color: #eee;
    }
`

export const Games = () => {
  return (
    <Wrapper>
    <div className = "wrap">
      <ComingSoon title="Game Statistics" desc="Data about games is not available as of now. Check back in when the competition has commenced, to see all the details about every team and players and performance in one place."/>
    </div>
    </Wrapper>
  );
};

