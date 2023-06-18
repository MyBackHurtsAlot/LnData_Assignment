import React, { useEffect } from "react";
import styled from "styled-components";
import useFetch from "../../Hooks/useFetch";
import { border } from "../../GlobalStyle/SharedStyles";
import ModalChart from "./Chart";

const Modal = ({ setShowModal }) => {
    const url = `http://localhost:9999/api/under15`;
    const { data: teamsUnder15, error } = useFetch(url);
    // useEffect(() => {
    //     console.log(teamsUnder15);
    // }, [teamsUnder15]);

    return (
        <>
            <ChartWrapper
                onClick={() => {
                    setShowModal(false);
                }}
            ></ChartWrapper>
            <ChartModal>
                <ModalChart teamsUnder15={teamsUnder15} />
            </ChartModal>
        </>
    );
};

export default Modal;

const ChartModal = styled.div`
    position: absolute;
    width: 90%;
    height: 50%;
    ${border};
    background-color: ${(props) => props.theme.colors.primary_White};
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ChartWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.primary_Lightgrey};
    opacity: 90%;
    z-index: 1;
`;
