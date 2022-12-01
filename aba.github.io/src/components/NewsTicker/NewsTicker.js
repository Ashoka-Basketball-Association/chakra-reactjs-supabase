import React from 'react';
import Marquee from 'react-fast-marquee';
const NewsTicker = () => {
  return (
    <Marquee
      pauseOnHover={true}
      speed={40}
      style={{ background: 'black', color: 'white', padding: '4px' }}
      gradientColor={[0, 0, 0]}
    >
      <h1
        style={{
          fontSize: '16px',
          fontWeight: '900',
          fontFamily: 'Manrope, sans-serif',
        }}
      >
        AUCTION TONIGHT AT THE MPH!
      </h1>
    </Marquee>
  );
};

export default NewsTicker;
