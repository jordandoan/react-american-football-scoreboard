import React, {Component} from "react";
import BottomRow from "./BottomRow";
import Team from "./Team";

class ScoreBoard extends Component {
    render(){
        return (
            <section className="scoreboard">
                <div className="topRow">
                    <div className="home">
                        <Team team="Lions" score={this.props.homeScore}/>
                    </div>
                    <div className="timer">00:03</div>
                    <div className="away">
                        <Team team="Tigers" score={this.props.awayScore}/>
                    </div>
                </div>
                <BottomRow />
            </section>
        );
    }
}
export default ScoreBoard;