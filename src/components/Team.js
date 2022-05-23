import { Component } from "react";
import TeamMember from "./TeamMember";

import membersInfo from "./memberInfo";

class Team extends Component {

    constructor() {
        super();
        this.state = {
            membersInfo: membersInfo
        }
    }

    mapping(x) {
        const members = x.map(
            member =>
                <TeamMember
                    key={member.id}
                    img={member.img}
                    name={member.name}
                    position={member.position}
                    phone={member.phone}
                    email={member.email}
                    website={member.website}
                />
        );
        return members;
    }

    render() {
        return (
            <div className="row" >
                {this.mapping(this.state.membersInfo)}
            </div>
        );
    }

}


export default Team;