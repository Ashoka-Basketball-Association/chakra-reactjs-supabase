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
      <ComingSoon title="Court Booking" desc="Court booking is not available yet. Access to this page will be available after the auction is over and teams have been formed."/>
    </div>
    </Wrapper>
  );
};

