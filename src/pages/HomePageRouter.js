import React, { useState } from "react";
import SearchSection from "../Components/SearchSection/Index";
import TableSection from "../Components/TableSection";
import Charts from "../Components/Charts/Index";
import { useDispatch, useSelector } from "react-redux";

const HomePageRouter = () => {
    // const [selectedTeam, setSelectedTeam] = useState("All");
    // const [keyword, setKeyword] = useState("");
    const [send, setSend] = useState(false);
    const selectedTeam = useSelector((state) => state.team);
    const keyword = useSelector((state) => state.keyword);

    return (
        <>
            <SearchSection
            // setSelectedTeam={setSelectedTeam}
            // setKeyword={setKeyword}
            />
            <Charts />
            <TableSection selectedTeam={selectedTeam} keyword={keyword} />
        </>
    );
};

export default HomePageRouter;
