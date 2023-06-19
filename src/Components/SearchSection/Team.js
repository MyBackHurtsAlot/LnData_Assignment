import React, { useState } from "react";
import styled from "styled-components";
import useFetch from "../../Hooks/useFetch";

const TeamDropdown = ({ selectedTeamsTemp, setSelectedTeamsTemp }) => {
    const url = "http://localhost:9999/api/teams";
    const { data: teamNames, error } = useFetch(url);
    const handleSelectChange = (e) => {
        const selectedOption = e.target.value;
        if (selectedOption === "All") {
            setSelectedTeamsTemp("All");
        } else {
            setSelectedTeamsTemp(selectedOption);
        }
    };

    return (
        <>
            <TeamText>Team:</TeamText>
            <TeamSelect value={selectedTeamsTemp} onChange={handleSelectChange}>
                <option value="All">All</option>
                {teamNames &&
                    teamNames.map((team) => (
                        <option value={team.team_name} key={team.team_name}>
                            {team.team_name}
                        </option>
                    ))}
            </TeamSelect>
        </>
    );
};

export default TeamDropdown;

const TeamText = styled.span`
    margin-right: 15px;
`;

const TeamSelect = styled.select`
    padding: 5px;
    cursor: pointer;
`;
