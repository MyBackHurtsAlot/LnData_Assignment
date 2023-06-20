import React from "react";
import styled from "styled-components";
import { border } from "../../GlobalStyle/SharedStyles";

const Pagination = ({
    currentPage,
    totalPages,
    onNextPage,
    onPreviousPage,
    goToPage,
}) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        let startPage;
        let endPage;
        if (totalPages < 5) {
            startPage = 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - 2;
            endPage = currentPage + 2;
        }

        if (startPage < 1) {
            endPage += Math.abs(startPage) + 1;
            startPage = 1;
        }

        if (endPage > totalPages) {
            startPage -= endPage - totalPages;
            endPage = totalPages;
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers.map((pageNumber) => (
            <PageNumber
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => goToPage(pageNumber)}
            >
                {pageNumber}
            </PageNumber>
        ));
    };

    return (
        <PaginationWrapper>
            {currentPage > 1 && (
                <PageButton onClick={onPreviousPage}> &lt;&lt; </PageButton>
            )}

            {renderPageNumbers()}

            {currentPage < totalPages && (
                <PageButton onClick={onNextPage}> &gt;&gt;</PageButton>
            )}
        </PaginationWrapper>
    );
};

export default Pagination;

const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const PageButton = styled.div`
    margin: 0 5px;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${border}
    background-color: ${(props) =>
        props.active ? props.theme.colors.primary_Lightgrey : "transparent"};
    color: ${(props) =>
        props.active ? props.theme.colors.primary_Darkgrey : "inherit"};
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary_Lightgrey};
        color: ${(props) => props.theme.colors.primary_Darkgrey};
    }
`;

const PageNumber = styled(PageButton)`
    width: 30px;
`;
