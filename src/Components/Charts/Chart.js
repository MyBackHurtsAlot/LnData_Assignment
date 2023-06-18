import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const ModalChart = ({ teamsUnder15 }) => {
    const [labels, setLabels] = useState([]);
    const [counts, setCounts] = useState([]);
    const [data, setData] = useState();
    const [options, setOptions] = useState();

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    useEffect(() => {
        if (teamsUnder15 && teamsUnder15.length > 0) {
            const teamNames = teamsUnder15.map((team) => team.team_name);
            const counts = teamsUnder15.map((team) => team.count);

            setLabels(teamNames);
            setCounts(counts);
        }
    }, [teamsUnder15]);

    useEffect(() => {
        const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: "Teams that players less than 15",
                },
            },
        };

        const data = {
            labels,
            datasets: [
                {
                    label: "players",
                    data: counts.map((count) => count),
                    backgroundColor: "#40404098",
                },
            ],
        };
        setData(data);
        setOptions(options);
    }, [labels, counts]);

    return (
        <>
            <BarWrapper>
                {teamsUnder15 && teamsUnder15.length > 0 && (
                    <Bar data={data} options={options} />
                )}
            </BarWrapper>
        </>
    );
};

export default ModalChart;

const BarWrapper = styled.div`
    width: 90%;
    height: 90%;
`;
