import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Index";
import PlayerList from "./Components/PlayerList/Index";
import HomePageRouter from "./pages/HomePageRouter";
import DetailPageRouter from "./pages/DetailPageRouter";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <PlayerList />
                <Routes>
                    <Route path="/" element={<HomePageRouter />} />
                    <Route path="/player/:id" element={<DetailPageRouter />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
