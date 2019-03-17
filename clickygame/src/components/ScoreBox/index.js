import React from "react";
import "./style.css";

const ScoreBox = props => {
    return (
        <div>
            <h2>Score: <span>{props.score}</span></h2>
            <h2>Top Score: <span>{props.topScore}</span></h2>

            <button onClick={props.resetGame} className="btn btn-danger">Reset Game</button>
        </div>
    )

}

export default ScoreBox;