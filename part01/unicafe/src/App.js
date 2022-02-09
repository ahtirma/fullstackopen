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
    <tr>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
    </tr>
  )
}

const Statistics = (props) => {
  const {
    good, 
    neutral, 
    bad,
    all,
    average,
    positiveFeedback,
  } = props;
  
  if(all) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticsLine text='good' value={good} />
            <StatisticsLine text='neutral' value={neutral} />
            <StatisticsLine text='bad' value={bad} />
            <StatisticsLine text='all' value={all} />
            <StatisticsLine text='average' value={average} />
            <StatisticsLine text='positive feedback' value={`${positiveFeedback} %`} />
          </tbody>
        </table>
      </div>  
    )
  }
  
  return (
    <p>No Feedback given</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positiveFeedback = (good / all) * 100;

  const handleGoodFeedback = () => {
    setGood(good + 1);
  }

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
  }

  const handleBadFeedback = () => {
    setBad(bad + 1);
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
        average={average}
        positiveFeedback={positiveFeedback}
      />
    </div>
  )
}

export default App;