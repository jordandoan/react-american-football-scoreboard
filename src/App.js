//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import ScoreButton from "./Button";
import ScoreBoard from "./ScoreBoard";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let homeTeam = "Lions";
  let awayTeam = "Tigers";
  const [homeScore, addHomeScore] = useState({score:0, team:homeTeam});
  const [awayScore, addAwayScore] = useState({score:0, team:awayTeam});
  function increaseScore(team,points) {
    if (homeScore.team === team) {
      addHomeScore({score:homeScore.score + points, team:homeTeam});
    } else {
      addAwayScore({score:awayScore.score + points, team:awayTeam});
    }
  }
  return (
    <div className="container">
      <ScoreBoard homeScore={homeScore} awayScore={awayScore}/>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <ScoreButton team="Home" scoreType="Touchdown" onClick={() => {addHomeScore({score:homeScore.score + 7, team:homeTeam})}}/>
          <ScoreButton team="Home" scoreType="Field Goal" onClick={() => {addHomeScore({score:homeScore.score + 3, team:homeTeam})}}/>
          <ScoreButton team="Increase Lions By 999" scoreType="" onClick={() => {increaseScore("Lions",999)}}/>
        </div>
        <div className="awayButtons">
          <ScoreButton team="Away" scoreType="Touchdown" onClick={()=>{addAwayScore({score:awayScore.score + 7, team:awayTeam})}}/>
          <ScoreButton team="Away" scoreType="Field Goal" onClick={()=>{addAwayScore({score:awayScore.score + 3, team:awayTeam})}}/>
          
        </div>
      </section>
    </div>
  );
}

export default App;
