import React from "react";
import SearchSection from "../Components/SearchSection/Index";
import TableSection from "../Components/TableSection";
import Charts from "../Components/Charts/Index";

const HomePageRouter = () => {
    return (
        <>
            <SearchSection />
            <Charts />
            <TableSection />
        </>
    );
};

export default HomePageRouter;
