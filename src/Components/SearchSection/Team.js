import React, { useState } from "react";
import styled from "styled-components";
import useFetch from "../../Hooks/useFetch";

const TeamDropdown = () => {
    const url = "http://localhost:9999/api/teams";
    const { data: teamNames, error } = useFetch(url);
    const [selectedTeams, setSelectedTeams] = useState([]);
    // console.log(teamNames);

    const handleSelectChange = (e) => {
        const selectedOption = e.target.value;
        if (selectedOption === "All") {
            setSelectedTeams(teamNames.map((team) => team.team_name));
        } else {
            setSelectedTeams([selectedOption]);
        }
    };
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    console.log(selectedTeams);
    return (
        <>
            <TeamText>Team:</TeamText>
            <TeamSelect value={selectedTeams} onChange={handleSelectChange}>
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
