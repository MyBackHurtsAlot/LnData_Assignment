import React, { useState, useRef } from "react";
import styled from "styled-components";
import { hover, border } from "../../GlobalStyle/SharedStyles";
import TeamDropdown from "./Team";
import Keyword from "./Keyword";
import { device } from "../../GlobalStyle/Rwd";
import { useSelector, useDispatch } from "react-redux";
import { setTeam } from "../../actions/teamActions";
import { setKeyword } from "../../actions/keywordSelections";

const SearchSection = () => {
    const [selectedTeamsTemp, setSelectedTeamsTemp] = useState("");
    const keywordRef = useRef();
    const dispatch = useDispatch();

    const selectedTeam = useSelector(() => selectedTeamsTemp);

    const keyword = useSelector((state) => state.keyword);
    console.log(keyword);

    const sendSearch = () => {
        // setSelectedTeam(selectedTeamsTemp);
        // setKeyword(keywordRef.current.value);
        dispatch(setTeam(selectedTeam));
        dispatch(setKeyword(keywordRef.current.value));
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
    padding: 20px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    @media ${device.underTablet} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }
`;
const TeamWrapper = styled.div`
    /* width: 30%; */
    height: 150px;
`;
const KeywordsWrapper = styled.div`
    /* width: 30%; */
    height: 150px;
`;

const SearchButton = styled.div`
    width: 15%;
    height: 50px;
    margin: auto 0 0 0;

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    ${hover};
    ${border};
    @media ${device.underTablet} {
        width: 45%;
        font-size: 1.2rem;
        height: 70px;
    }
`;
