import React from "react";
import styled from "styled-components";
const Name = styled.h1`
    background: var(--gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const NameSmall = styled.h4`
    background: var(--gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const ResultContainer = styled.div`
    padding: 1rem;
    margin: 0 auto;

    max-width: 900px;
`;
const Results = styled.div`
    padding: 0rem 0rem;
    margin: 1rem;
    color: #719cff;
    width: 100%;
`;

const Row = styled.div`
    display: grid;
    max-width: 500px;
    grid-template-columns: 1fr 5rem 1fr;
    & div {
        text-align: center;
        padding: 0.5rem;
    }
`
const Res = ({ matchesInfo }) => {
    //const matches = [];
    const gruppe = matchesInfo.reduce((acc, cur) => {
        //console.log(cur)
        let newgroup = { ...acc };
        if (acc[cur.tournamentPhaseId]) {
            newgroup[cur.tournamentPhaseId].count++;
            if (cur.resultLocked) {
                newgroup[cur.tournamentPhaseId]["results"].push({
                    teams: cur.matchTeams,
                    id: cur.id
                });
            } else {
                newgroup[cur.tournamentPhaseId]["matches"].push({
                    teams: cur.matchTeams,
                    id: cur.id
                });
            }
        } else {
            newgroup[cur.tournamentPhaseId] = {
                groupName1: cur.groupName1,
                count: 0,
                groupName2: cur.groupName2
            };
            newgroup[cur.tournamentPhaseId]["matches"] = [];
            newgroup[cur.tournamentPhaseId]["results"] = [];
            if (cur.resultLocked) {
                newgroup[cur.tournamentPhaseId]["results"].push({
                    teams: cur.matchTeams,
                    id: cur.id
                });
            } else {
                newgroup[cur.tournamentPhaseId]["matches"].push({
                    teams: cur.matchTeams,
                    id: cur.id
                });
            }
        }
        return newgroup;
    }, {});
    let groups = [];
    for (let g of Object.keys(gruppe)) {
        groups.push({ ...gruppe[g], id: g });
    }
    const matches = groups
        .sort((a, b) => b.id - a.id)
        .map(x => {
            const matches = x.matches.map(x => (
                <React.Fragment key={x.id}>
                    <div>{x.teams[0].team.name}</div>
                    <div>vs</div>
                    <div>{x.teams[1].team.name}</div>
                </React.Fragment>
            ));
            const results = x.results.map(x => (
                <React.Fragment key={x.id}>
                    <div>{x.teams[0].team.name}</div>
                    <div>{x.teams[0].score}-{x.teams[1].score}</div>
                    <div>{x.teams[1].team.name}</div>
                </React.Fragment>
            ));

            console.log(matches)
            console.log(results)
            return (
                <div key={x.groupName1 + x.groupName2}>
                    <NameSmall>{x.groupName1} - {x.groupName2}</NameSmall>
                    {matches.length != 0 ?  <div>Matches</div> : null}
                    <Row>{matches}</Row>
                    {results.length != 0 ?  <div>Results</div> : null}
                    <Row>{results}</Row>
                </div>
            );
        });

    console.log(JSON.stringify(gruppe, null, 4));
    console.log(JSON.stringify(groups, null, 4));
    /*const matches = matchesInfo.reverse().map(match => {
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
    });*/
    return (
        <ResultContainer>
            <Name>Esportligaen</Name>
            <Results>{matches}</Results>
        </ResultContainer>
    );
};

export default Res;
