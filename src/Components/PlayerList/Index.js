import React from "react";
import styled from "styled-components";
const PlayerList = () => {
    return (
        <>
            <PlayerListWrapper>Player list</PlayerListWrapper>
        </>
    );
};

export default PlayerList;

const PlayerListWrapper = styled.div`
    width: 100%;
    height: 50px;
    margin: 10px auto;
    padding-left: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5rem;
    background-color: ${(props) => props.theme.colors.primary_Grey};
    color: ${(props) => props.theme.colors.primary_White};
`;
