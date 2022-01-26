import React, {useState} from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [feedbackPoints, setFeedBackPoints] = useState([]);

  const handleGoodFeedback = () => {
    setGood(good + 1);
    setAll(all + 1);
    setFeedBackPoints(feedbackPoints.concat(1));
  }

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
    setFeedBackPoints(feedbackPoints.concat(0));
  }

  const handleBadFeedback = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setFeedBackPoints(feedbackPoints.concat(-1));
  }

  const averageScoreFeedback = () => {
    let average = 0;
    let sum = 0;

    feedbackPoints.forEach((value) => {
      sum = sum + value;
    })
    average = sum/all;
    
    return average ? average : 0;
  }

  const positiveFeedbackPercentage = () => {
    const percentage = ((good/all)*100);
    return percentage ? percentage : 0;
  }

  return(
    <div>
      <h1>Give Feedback</h1>
      
      <button onClick={handleGoodFeedback}>good</button>
      <button onClick={handleNeutralFeedback}>neutral</button>
      <button onClick={handleBadFeedback}>bad</button>

      <h2>Statistics</h2>
      
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {averageScoreFeedback()}</p>
      <p>positive {positiveFeedbackPercentage()} %</p>
    </div>
  )
}

export default App;