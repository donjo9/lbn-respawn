import react from "react"
import Team from "../components/team";
import Res from "../components/results"
import fetch from "isomorphic-unfetch";


const Origin = ({team}) => {
    const members = team.members.map(x => x.user.nickName)
    return (
        <div>
            <Team name="Origin" members={members} />
            <Res matchesInfo={team.matches} />
        </div>
    )
}

Origin.getInitialProps = async ctx => {

    const res = await fetch(
        "https://app.esportligaen.dk/api/team/1496?includeViewInfo=true"
    );
    const json = await res.json();
    return { team: json };
};


export default Origin;