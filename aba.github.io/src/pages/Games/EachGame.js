import React from 'react';
import styled from 'styled-components';
import {GamesGrid} from "../../components/EachGame/GameTable"

const Wrapper = styled.div`
    .wrap{
        background-color: #eee;
    }
`

export const EachGame = (props) => {
    return (
        <Wrapper>
            <div className = "wrap">
                <GamesGrid />
            </div>
        </Wrapper>
    );
};

