import React, { useState } from "react";
import styled from "styled-components";
import { outline, hover, border } from "../../GlobalStyle/SharedStyles";
import Modal from "./Modal";

const Charts = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(true);
    };

    return (
        <>
            <ChartWrapper>
                <ChartButton onClick={toggleModal}>Show Charts</ChartButton>
                {showModal ? <Modal setShowModal={setShowModal} /> : null}
            </ChartWrapper>
        </>
    );
};

export default Charts;

const ChartWrapper = styled.section`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

const ChartButton = styled.div`
    width: 170px;
    font-size: 1.5rem;
    margin: 15px 0;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${hover};
    ${border};
`;
