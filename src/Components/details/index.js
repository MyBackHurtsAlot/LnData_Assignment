import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
const DetailData = ({ allData }) => {
    const [data, setData] = useState("");

    useEffect(() => {
        allData.map((data) => setData(data));
    }, [allData]);

    return (
        <>
            <DetailWrapper>
                <ContentsWrapper key={uuidv4()}>
                    <Content>Name: {data.name}</Content>
                    <Content>Team: {data.team_acronym}</Content>
                    <Content>TeamName: {data.team_name}</Content>
                    <Content>Games: {data.games_played}</Content>
                    <Content>MPG: {data.minutes_per_game}</Content>
                    <Content>
                        FGA: {data.field_goals_attempted_per_game}
                    </Content>
                    <Content>FGM: {data.field_goals_made_per_game}</Content>
                    <Content>FG%: {data.field_goal_percentage}</Content>
                    <Content>FT%: {data.free_throw_percentage}</Content>
                    <Content>
                        3PA: {data.three_point_attempted_per_game}
                    </Content>
                    <Content>3PM: {data.three_point_made_per_game}</Content>
                    <Content>3PT%: {data.three_point_percentage}</Content>
                    <Content>Points: {data.points_per_game}</Content>
                    <Content>
                        ORebounds: {data.offensive_rebounds_per_game}
                    </Content>
                    <Content>
                        DRebounds: {data.defensive_rebounds_per_game}
                    </Content>
                    <Content>Rebounds: {data.rebounds_per_game}</Content>
                    <Content>Assists: {data.assists_per_game}</Content>
                    <Content>Steals: {data.steals_per_game}</Content>
                    <Content>Blocks: {data.blocks_per_game}</Content>
                    <Content>Turnovers: {data.turnovers_per_game}</Content>
                    <Content>
                        Efficiency: {data.player_efficiency_rating}
                    </Content>
                </ContentsWrapper>
            </DetailWrapper>
        </>
    );
};

export default DetailData;

const DetailWrapper = styled.section`
    width: 90%;
    margin: 0 auto;
    border: 3px solid #1c1c1c;
    border-width: 3px 5px;
    border-radius: 1% 1% 3% 3% / 90% 90% 3% 2%;
`;

const ContentsWrapper = styled.div`
    width: auto;
`;

const Content = styled.div`
    margin: 5px 0;
    padding: 5px 15px;
    letter-spacing: 1.2px;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary_Grey};
    &:first-child {
        font-size: 1.5rem;
        border-bottom: 3px solid ${(props) => props.theme.colors.primary_Grey};
    }
    &:last-child {
        border-bottom: none;
    }
`;
