import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import DetailData from "../Components/details";

const DetailPageRouter = () => {
    const playerId = useParams();
    const [currentPlayer, setCurrentPlayer] = useState();
    const url = `http://localhost:9999/api/playerDetail/${currentPlayer}`;
    const { data: allData, error } = useFetch(url);

    useEffect(() => {
        setCurrentPlayer(playerId.id);
    }, [playerId]);

    useEffect(() => {
        if (allData && allData.data) {
            setTableData(allData.data);
        }
    }, [allData]);

    return (
        <>
            <DetailData allData={allData} />
        </>
    );
};

export default DetailPageRouter;
