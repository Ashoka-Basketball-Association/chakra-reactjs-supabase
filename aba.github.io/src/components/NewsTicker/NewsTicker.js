import React from 'react';
import Marquee from 'react-fast-marquee';
const NewsTicker = () => {
  return (
    <Marquee
      pauseOnHover={true}
      speed={40}
      style={{ background: 'black', color: 'white', paddingTop: '12px', paddingBottom: '12px' }}
      gradientColor={[0, 0, 0]}
    >
      <h1
        style={{
          fontSize: '20px',
          fontWeight: '500',
          fontFamily: 'Manrope, sans-serif',
        }}
      >
        AUCTION TONIGHT AT THE SPORTS MPH! &nbsp; BE THERE AT 7:00PM
      </h1>
    </Marquee>
  );
};

export default NewsTicker;
