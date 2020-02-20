import React from 'react';
import Team from '../components/team';
import fetch from "isomorphic-unfetch";

const Legends = ({team}) => {
    const members = team.members.map(x => x.user.nickName)
    return (
        <Team name="Legends" members={members} />
    )
}

Legends.getInitialProps = async ctx => {

    const res = await fetch(
        "https://app.esportligaen.dk/api/team/1649?includeViewInfo=true"
    );
    const json = await res.json();
    return { team: json };
};

export default Legends;
