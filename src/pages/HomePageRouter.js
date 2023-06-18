import React, { useState } from "react";
import SearchSection from "../Components/SearchSection/Index";
import TableSection from "../Components/TableSection";
import Charts from "../Components/Charts/Index";

const HomePageRouter = () => {
    const [selectedTeam, setSelectedTeam] = useState("All");
    const [keyword, setKeyword] = useState("");

    return (
        <>
            <SearchSection
                setSelectedTeam={setSelectedTeam}
                setKeyword={setKeyword}
            />
            <Charts />
            <TableSection selectedTeam={selectedTeam} keyword={keyword} />
        </>
    );
};

export default HomePageRouter;
