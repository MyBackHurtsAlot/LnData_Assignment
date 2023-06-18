import React, { useState, useRef } from "react";
import styled from "styled-components";
import { hover, border } from "../../GlobalStyle/SharedStyles";
import TeamDropdown from "./Team";
import Keyword from "./Keyword";

const SearchSection = ({ setSelectedTeam, setKeyword }) => {
    const [selectedTeamsTemp, setSelectedTeamsTemp] = useState("");
    const keywordRef = useRef();
    const sendSearch = () => {
        setSelectedTeam(selectedTeamsTemp);
        setKeyword(keywordRef.current.value);
    };
    return (
        <>
            <SearchWrapper>
                <TeamWrapper>
                    <TeamDropdown
                        setSelectedTeamsTemp={setSelectedTeamsTemp}
                        selectedTeams={selectedTeamsTemp}
                    />
                </TeamWrapper>
                <KeywordsWrapper>
                    <Keyword keywordRef={keywordRef} />
                </KeywordsWrapper>
                <SearchButton onClick={sendSearch}>Search</SearchButton>
            </SearchWrapper>
        </>
    );
};

export default SearchSection;

const SearchWrapper = styled.section`
    width: 90%;
    height: 200px;
    border: 3px solid #1c1c1c;
    border-width: 3px 5px;
    border-radius: 1% 1% 3% 3% / 90% 90% 3% 2%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    gap: 15px;
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

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    ${hover};
    ${border};
`;
