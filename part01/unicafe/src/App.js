import React, {useState} from 'react';

const Button = (props) => {
  const {onClick, text} = props;
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticsLine = (props) => {
  const {text, value} = props;
  return (
    <p>
      {text} {value}
    </p>
  )
}

const Statistics = (props) => {
  const {
    good, 
    neutral, 
    bad,
    all, 
    averageScoreFeedback, 
    positiveFeedbackPercentage
  } = props;

  if(all === 0) {
    return (
      <div>
        <p>No feedback given!</p>
      </div>
    )
  }
  return (
    <div>
      <StatisticsLine text='good' value={good} />
      <StatisticsLine text='neutral' value={neutral} />
      <StatisticsLine text='bad' value={bad} />
      <StatisticsLine text='all' value={all} />
      <StatisticsLine text='average' value={averageScoreFeedback()} />
      <StatisticsLine text='positive' value={positiveFeedbackPercentage()+' %'} />
    </div>  
  )
}

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
    
    return average;
  }

  const positiveFeedbackPercentage = () => {
    const percentage = ((good/all)*100);
    return percentage;
  }

  return(
    <div>
      <h1>Give Feedback</h1>
      
      <Button onClick={handleGoodFeedback} text='good' />
      <Button onClick={handleNeutralFeedback} text='neutral' />
      <Button onClick={handleBadFeedback} text='bad' />

      <h2>Statistics</h2>
      <Statistics 
        good={good} 
        neutral={neutral}
        bad={bad} 
        all={all} 
        averageScoreFeedback={averageScoreFeedback} 
        positiveFeedbackPercentage={positiveFeedbackPercentage} 
      />
    </div>
  )
}

export default App;