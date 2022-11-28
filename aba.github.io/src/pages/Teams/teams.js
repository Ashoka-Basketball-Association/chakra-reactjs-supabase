import React from 'react';
import {TeamsBanner} from "../../components/TeamsBanner/TeamsBanner"
import styled from 'styled-components';
import { TeamsGrid } from "../../components/TeamsGrid/TeamsGrid"

const Wrapper = styled.div`
.bg{
  background-color: #eee;
}`;

export const TeamPage = () => {
  return (
    <Wrapper>
      <div className="bg">
        <TeamsBanner />
        <TeamsGrid />
    </div>
    </Wrapper>
  )
};

