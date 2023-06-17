import React from "react";
import styled from "styled-components";
import useFetch from "../../Hooks/useFetch";

const Keyword = () => {
    return (
        <>
            <KeywordsText>Keywords:</KeywordsText>
            <KeywordInput></KeywordInput>
        </>
    );
};

export default Keyword;

const KeywordsText = styled.span`
    margin-right: 15px;
`;

const KeywordInput = styled.input`
    padding: 5px;
`;
