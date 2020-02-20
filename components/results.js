import React from "react";
import styled from "styled-components";
const Name = styled.h1`
    background: var(--gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const ResultContainer = styled.div`
    padding: 1rem;
    margin: 0 auto;

    max-width: 900px;
`;
const Results = styled.table`
    padding: 0rem 0rem;
    margin: 1rem;
    color: #719cff;
    width: 100%;
`;

const ResultRow = styled.tr`
    display: grid;
    grid-template-columns: 1fr 5rem 5rem 1fr;
    & td {
        box-sizing: border-box;
        padding: 0rem 1rem;
        text-align: center;
    }
    & td:nth-child(3) {
        grid-area: 1 / 4 / 2 / 5;
    }
    & td:nth-child(4) {
        grid-area: 1 / 3 / 2 / 4;
    }
`;

const Result = styled.li`
    padding: 0rem 1rem;
    line-height: 1rem;
    color: #719cff;
`;

const Res = ({ matchesInfo }) => {
    const matches = matchesInfo.reverse().map(match => {
        const matchResult = match.matchTeams.map(mTeam => (
            <React.Fragment key={"" + match.id + mTeam.team.id}>
                <td>{mTeam.team.name}</td>
                <td>{mTeam.score}</td>
            </React.Fragment>
        ));
        return (
            <React.Fragment key={match.id}>
                <ResultRow> {matchResult}</ResultRow>
            </React.Fragment>
        );
    });
    return (
        <ResultContainer>
            <Name>Result</Name>
            <Results>
                <tbody>{matches}</tbody>
            </Results>
        </ResultContainer>
    );
};

export default Res;
