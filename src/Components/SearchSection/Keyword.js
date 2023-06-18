import React, { useRef } from "react";
import styled from "styled-components";
import useFetch from "../../Hooks/useFetch";

const Keyword = ({ keywordRef }) => {
    return (
        <>
            <KeywordsText>Keywords:</KeywordsText>
            <KeywordInput ref={keywordRef} />
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
