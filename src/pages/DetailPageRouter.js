import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

const DetailPageRouter = () => {
    const playerId = useParams();
    const [currentPlayer, setCurrentPlayer] = useState();

    useEffect(() => {
        setCurrentPlayer(playerId.id);
    }, [playerId]);
    console.log(currentPlayer);
    const url = `http://localhost:9999/api/playerDetail/${currentPlayer}`;
    const { data: allData, error } = useFetch(url);
    console.log(allData);

    // useEffect(() => {
    //     console.log("allData", allData);
    // }, [allData]);
    return <div>DetailPageRouter</div>;
};

export default DetailPageRouter;
