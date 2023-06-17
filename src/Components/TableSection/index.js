import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../../Hooks/useFetch";
import { BiSearch } from "react-icons/bi";
import Pagination from "./Pagination";

const TableSection = () => {
    const [page, setPage] = useState(1);
    const [tableData, setTableData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();
    const url = `http://localhost:9999/api/allData/${page}`;

    const { data: allData, error } = useFetch(url);

    useEffect(() => {
        console.log("allData", allData);
    }, [allData]);

    useEffect(() => {
        if (allData && allData.data) {
            setTableData(allData.data);
            setTotalPages(allData.totalPages);
        }
    }, [allData]);

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    const goToPage = (pageNumber) => {
        setPage(pageNumber);
    };

    const handlePlayerClick = (playerData) => {
        navigate(`/player/${playerData.id}`);
        console.log("ddd", playerData.id);
    };

    return (
        <>
            <TableWrapper>
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>Team</TableHeader>
                            <TableHeader>Name</TableHeader>
                            <TableHeader>Games</TableHeader>
                            <TableHeader>Points</TableHeader>
                            <TableHeader>Rebounds</TableHeader>
                            <TableHeader>Assists</TableHeader>
                            <TableHeader>Steals</TableHeader>
                            <TableHeader>Blocks</TableHeader>
                            <TableHeader>Detail</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell>{row.team_name}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.games_played}</TableCell>
                                <TableCell>{row.points_per_game}</TableCell>
                                <TableCell>{row.rebounds_per_game}</TableCell>
                                <TableCell>{row.assists_per_game}</TableCell>
                                <TableCell>{row.steals_per_game}</TableCell>
                                <TableCell>{row.blocks_per_game}</TableCell>
                                <TableCell>
                                    <IconWrapper
                                        onClick={() => {
                                            handlePlayerClick(row);
                                        }}
                                    >
                                        <BiSearch />
                                    </IconWrapper>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </TableWrapper>
            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onNextPage={handleNextPage}
                onPreviousPage={handlePreviousPage}
                setPage={setPage}
                goToPage={goToPage}
            />
        </>
    );
};

export default TableSection;

const TableWrapper = styled.section`
    width: 90%;
    margin: 0 auto;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    outline: 3px solid ${(props) => props.theme.colors.primary_Grey};
    /* border-radius: 15px; */
`;

const TableHeader = styled.th`
    background-color: ${(props) => props.theme.colors.primary_Lightgrey};
    text-align: center;
    padding: 10px;
    font-weight: 500;
    /* &:first-child {
        border-top-left-radius: 10px;
    } */
    &:last-child {
        /* border-top-right-radius: 10px; */
        border-right: none;
    }
    border-right: 3px solid ${(props) => props.theme.colors.primary_Grey};
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: ${(props) => props.theme.colors.primary_Lightgrey};
    }
`;

const TableCell = styled.td`
    padding: 10px;
    text-align: center;
    /* line-height: 0; */
    /* &:first-child {
        border-bottom-left-radius: 10px;
    } */
    &:last-child {
        /* border-bottom-right-radius: 10px; */
        border-right: none;
    }
    border-right: 3px solid ${(props) => props.theme.colors.primary_Grey};
`;

const IconWrapper = styled.div`
    cursor: pointer;
    &:hover {
        transform: translateX(2px);
        transform: translateY(-2px);
    }
`;
