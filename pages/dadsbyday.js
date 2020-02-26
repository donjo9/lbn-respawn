import React from 'react';
import Team from '../components/team';
import fetch from "isomorphic-unfetch";
import Res from '../components/results';

const DadsByDay = ({team}) => {
    const members = team.members.map(x => x.user.nickName)
    return (
        <div>
            <Team name="DadsByDay" members={members} />
            <Res matchesInfo={team.matches} />
        </div>
    )
}

DadsByDay.getInitialProps = async ctx => {

    const res = await fetch(
        "https://app.esportligaen.dk/api/team/1659?includeViewInfo=true"
    );
    const json = await res.json();
    return { team: json };
};

export default DadsByDay;

