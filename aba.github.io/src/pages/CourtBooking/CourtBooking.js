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
      <ComingSoon title="Court Booking" desc="Book the court side you need to practice. There are 4 half courts available. Keep the booking confirmation email once it has been scheduled."/>
    </div>
    </Wrapper>
  );
};

