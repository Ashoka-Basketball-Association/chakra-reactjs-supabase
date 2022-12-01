import React from 'react';
import styled from 'styled-components';
import bannerVideo from '../../../assets/videos/bannerVideo.mp4';

const Wrapper = styled.div`
  .overlay {
    position: absolute;
    // left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .content {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // padding-bottom: 35vh;
    padding-top: 13vh;
    font-size: 5vmax;
    text-align: center;
    white-space: nowrap;
    color: white;
  }
`;

const HomePageBanner = () => {
  return (
    <Wrapper>
      <div className="overlay"> </div>
      <video src={bannerVideo} autoPlay muted loop />
      <div className="content">
        <h1>Welcome to ABA.</h1>
      </div>
    </Wrapper>
  );
};

export default HomePageBanner;
