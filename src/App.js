//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import ScoreButton from "./Button";
import ScoreBoard from "./ScoreBoard";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, addHomeScore] = useState(0);
  const [awayScore, addAwayScore] = useState(0);
  return (
    <div className="container">
      <ScoreBoard homeScore={homeScore} awayScore={awayScore}/>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <ScoreButton team="Home" scoreType="Touchdown" onClick={() => {addHomeScore(homeScore + 7)}}/>
          <ScoreButton team="Home" scoreType="Field Goal" onClick={() => {addHomeScore(homeScore + 3)}}/>
        </div>
        <div className="awayButtons">
          <ScoreButton team="Away" scoreType="Touchdown" onClick={()=>{addAwayScore(awayScore + 7)}}/>
          <ScoreButton team="Away" scoreType="Field Goal" onClick={()=>{addAwayScore(awayScore + 3)}}/>
        </div>
      </section>
    </div>
  );
}

export default App;
