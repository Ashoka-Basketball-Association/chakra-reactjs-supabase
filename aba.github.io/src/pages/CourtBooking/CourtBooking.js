import React from 'react';
import ComingSoon from '../../components/ComingSoon/ComingSoon';
import styled from 'styled-components';

const Wrapper = styled.div`
    .wrap{
        background-color: #eee;
    }
`

export const CourtBooking = () => {
  return (
    <Wrapper>
    <div className = "wrap">
      <ComingSoon/>
    </div>
    </Wrapper>
  );
};

