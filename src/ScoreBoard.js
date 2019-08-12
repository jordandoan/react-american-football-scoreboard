import React, {Component} from "react";
import BottomRow from "./BottomRow";
import Team from "./Team";

class ScoreBoard extends Component {
    render(){
        return (
            <section className="scoreboard">
                <div className="topRow">
                    <div className="home">
                        <Team team={this.props.homeScore.team} score={this.props.homeScore.score}/>
                    </div>
                    <div className="timer">00:03</div>
                    <div className="away">
                        <Team team={this.props.awayScore.team} score={this.props.awayScore.score}/>
                    </div>
                </div>
                <BottomRow />
            </section>
        );
    }
}
export default ScoreBoard;