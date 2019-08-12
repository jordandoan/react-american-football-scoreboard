import React, {Component} from "react";


class scoreButton extends Component {
    render () {
        return (
            <button className="scoreButtons" onClick={this.props.onClick}>
                {this.props.team} {this.props.scoreType}
            </button>
        );
    }
}
export default scoreButton