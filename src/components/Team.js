import { Component } from "react";
import TeamMember from "./TeamMember";

import membersInfo from "./memberInfo";

class Team extends Component {

    constructor() {
        super();
        this.state = {
            membersInfo: membersInfo,
            members: [],
            counter: 0
        }

        this.clickEvent = this.clickEvent.bind(this);
    }

    clickEvent() {
        if (this.state.counter < this.state.membersInfo.length) {
            this.state.members.push(membersInfo[this.state.counter]);

            this.setState(prevState => {
                return {
                    counter: prevState.counter + 1
                }
            });
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
                <button className="btn btn-primary btn-lg btn-block" onClick={this.clickEvent}>Dispaly new</button>
                {this.mapping(this.state.members)}
            </div>
        );
    }

}


export default Team;