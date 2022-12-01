import { Heading } from '@chakra-ui/react';
import { Container } from '@nextui-org/react';
import React from 'react';
import styled from 'styled-components';
import HomePageInstaFeed from '../HomePage/HomePageInstaFeed/HomePageInstaFeed';
import { GrInstagram } from 'react-icons/gr';
const Wrapper = styled.div`
  .wrap {
    background-color: #eee;
  }
`;
const HighlightsPage = () => {
  return (
    <Wrapper>
      <Container>
        <Heading
          padding={10}
          textAlign={'center'}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            grid: '10px',
          }}
        >
          <GrInstagram />
          ABA Instagram
        </Heading>
        <HomePageInstaFeed />
      </Container>
    </Wrapper>
  );
};

export default HighlightsPage;
