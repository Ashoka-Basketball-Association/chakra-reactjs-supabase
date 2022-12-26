import React from 'react';
import Marquee from 'react-fast-marquee';
const NewsTicker = () => {
  return (
    <Marquee
      pauseOnHover={true}
      speed={40}
      style={{
        background: 'black',
        color: 'white',
        paddingTop: '12px',
        paddingBottom: '12px',
      }}
      gradientColor={[0, 0, 0]}
    >
      <h1
        style={{
          fontSize: '20px',
          fontWeight: '500',
          fontFamily: 'Manrope, sans-serif',
        }}
      >
        ABA 6.0 is now officially over! Congratulations to Team Escobar on
        winning it all!
      </h1>
    </Marquee>
  );
};

export default NewsTicker;
