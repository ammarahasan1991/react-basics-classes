import { Component } from "react";

class File extends Component {
    render() {
        return (
            <div>{this.props.name} {this.props.name2}</div>
        );
    }
}

export default File;