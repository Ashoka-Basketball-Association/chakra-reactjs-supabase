import { Heading } from '@chakra-ui/react';
import { Container } from '@nextui-org/react';
import React from 'react';
import styled from 'styled-components';
import StandingsTableP1 from '../../components/StandingsTable/StandingsTableP1';
import StandingsTableP2 from '../../components/StandingsTable/StandingsTableP2';
import StandingsTableP3 from '../../components/StandingsTable/StandingsTableP3';
import StandingsTableP4 from '../../components/StandingsTable/StandingsTableP4';

const Wrapper = styled.div`
  .group-heading {
    padding: 30px;
    text-align: center;
  }

  .pool-heading {
    padding: 20px;
  }
`;

const Standings = () => {
  return (
    <Wrapper>
      <Container>
        <Heading size="2xl" className="group-heading">
          Group Stage
        </Heading>
        <Heading className="pool-heading">Pool 1</Heading>
        <StandingsTableP1 />
        <Heading className="pool-heading">Pool 2</Heading>
        <StandingsTableP2 />
        <Heading className="pool-heading">Pool 3</Heading>
        <StandingsTableP3 />
        <Heading className="pool-heading">Pool 4</Heading>
        <StandingsTableP4 />
      </Container>
    </Wrapper>
  );
};

export default Standings;
