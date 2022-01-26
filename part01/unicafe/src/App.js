import React, {useState} from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodBtn = () => {
    setGood(good + 1);
  }

  const handleNeutralBtn = () => {
    setNeutral(neutral + 1);
  }

  const handleBadBtn = () => {
    setBad(bad + 1);
  }

  return(
    <div>
      <h1>Give Feedback</h1>
      
      <button onClick={handleGoodBtn}>good</button>
      <button onClick={handleNeutralBtn}>neutral</button>
      <button onClick={handleBadBtn}>bad</button>

      <h2>Statistics</h2>
      
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App;