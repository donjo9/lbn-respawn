import React from "react";
import styled from "styled-components";
const Name = styled.h1`
    background: var(--gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const TeamContainer = styled.div`
    padding: 1rem;
    margin: 0 auto;
    width: 100vw;
    max-width: 900px;
`
const Members = styled.ul`
    padding: 0rem 0rem;
    margin: 1rem;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    max-width: 100vw;
`;

const Member = styled.li`
    padding: 0rem 1rem;
    line-height: 1rem;
    color: #719cff;
`;
const Team = props => {
    const members = props.members.map(member => (
        <Member key={member}>{member}</Member>
    ));
    return (
        <TeamContainer>
            <Name>{props.name}</Name>
            <Members>{members}</Members>
        </TeamContainer>
    );
};

export default Team;
