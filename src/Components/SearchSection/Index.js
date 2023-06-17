import React from "react";
import styled from "styled-components";
import { radius } from "../../GlobalStyle/SharedStyles";
import TeamDropdown from "./Team";
import Keyword from "./Keyword";

const SearchSection = () => {
    return (
        <>
            <SearchWrapper>
                <TeamWrapper>
                    <TeamDropdown />
                </TeamWrapper>
                <KeywordsWrapper>
                    <Keyword />
                </KeywordsWrapper>
                <SearchButton>Search</SearchButton>
            </SearchWrapper>
        </>
    );
};

export default SearchSection;

const SearchWrapper = styled.section`
    width: 90%;
    height: 200px;
    outline: 3px solid ${(props) => props.theme.colors.primary_Grey};
    /* ${radius}; */
    margin: 0 auto;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    > * {
        /* ${radius}; */
    }
`;
const TeamWrapper = styled.div`
    width: 30%;
    height: 150px;
`;
const KeywordsWrapper = styled.div`
    width: 30%;
    height: 150px;
`;

const SearchButton = styled.div`
    width: 15%;
    height: 50px;
    margin: auto 0 0 auto;
    outline: 3px solid ${(props) => props.theme.colors.primary_Grey};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    transition: all 0.3s cubic-bezier(0.34, -0.28, 0.7, 0.93);
    &:hover {
        transform: translateX(2px);
        transform: translateY(-2px);
        box-shadow: 5px 5px 0px 0px #a6a6a6;
    }
`;
