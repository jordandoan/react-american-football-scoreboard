import React, {Component} from "react";

class Team extends Component {
    render(){
        return (
            <>
                <h2 className="name">{this.props.team}</h2>
                <div className="score">{this.props.score}</div>
            </>
        );
    }
}

export default Team;