import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../../Hooks/useFetch";
import { BiSearch } from "react-icons/bi";
import { LuArrowDownUp } from "react-icons/lu";
import Pagination from "./Pagination";
import useSortableData from "../../Hooks/useSortableData";

const TableSection = ({ selectedTeam, keyword }) => {
    const [url, setUrl] = useState();
    const [page, setPage] = useState(1);
    const [tableData, setTableData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        if (selectedTeam === "All" && keyword === "") {
            setUrl(`http://localhost:9999/api/allData/${page}`);
        } else if (selectedTeam === "" && keyword) {
            console.log(keyword);
            setUrl(
                `http://localhost:9999/api/searchPlayer/${page}?name=${keyword}`
            );
        } else if (selectedTeam === "All" && keyword) {
            setUrl(
                `http://localhost:9999/api/searchPlayer/${page}?name=${keyword}`
            );
        } else if (selectedTeam !== "All") {
            const encodedName = encodeURIComponent(selectedTeam);
            setUrl(`http://localhost:9999/api/teamData/${encodedName}/${page}`);
        }
    }, [selectedTeam, page, keyword]);
    useEffect(() => {
        setPage(1);
    }, [selectedTeam, keyword]);

    const { data: allData, error } = useFetch(url);

    useEffect(() => {
        if (allData && allData.data) {
            setTableData(allData.data);
            setTotalPages(allData.totalPages);
        }
    }, [allData, page]);

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
    };

    const filteredTableData = tableData.filter((row) =>
        row.name.toLowerCase().includes(keyword.toLowerCase())
    );

    const { sortedItems, requestSort } = useSortableData(filteredTableData, {
        key: "points_per_game",
        direction: "descending",
    });

    return (
        <>
            <TableWrapper>
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>Team</TableHeader>
                            <TableHeader>Name</TableHeader>
                            <TableHeader
                                onClick={() => requestSort("games_played")}
                            >
                                Games
                                <Arrow />
                            </TableHeader>
                            <TableHeader
                                onClick={() => requestSort("points_per_game")}
                            >
                                Points
                                <Arrow />
                            </TableHeader>
                            <TableHeader
                                onClick={() => requestSort("rebounds_per_game")}
                            >
                                Rebounds
                                <Arrow />
                            </TableHeader>
                            <TableHeader
                                onClick={() => requestSort("assists_per_game")}
                            >
                                Assists
                                <Arrow />
                            </TableHeader>
                            <TableHeader
                                onClick={() => requestSort("steals_per_game")}
                            >
                                Steals
                                <Arrow />
                            </TableHeader>
                            <TableHeader
                                onClick={() => requestSort("blocks_per_game")}
                            >
                                Blocks
                                <Arrow />
                            </TableHeader>
                            <TableHeader>Detail</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedItems.map((row) => (
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
    border: 3px solid #1c1c1c;
    border-width: 3px 3px 5px 7px;
    border-radius: 1% 0 0 0/7% 1% 1% 1%;
`;

const TableHeader = styled.th`
    background-color: ${(props) => props.theme.colors.primary_Lightgrey};
    text-align: center;
    padding: 10px;
    font-weight: 500;
    &:last-child {
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
    &:last-child {
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

const Arrow = styled(LuArrowDownUp)`
    margin-left: 5px;
    height: 14px;
    cursor: pointer;
`;
