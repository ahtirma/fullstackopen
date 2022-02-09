import React, {useState} from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  const anecdotesLength = anecdotes.length;

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotesLength).fill(0))
  const [mostVotesIndex, setMostVotesIndex] = useState(0);
  
  const randomAnecdote = () => {
    let randomNumber = Math.floor(Math.random() * anecdotesLength);
    while(randomNumber === selected) {
      randomNumber = Math.floor(Math.random() * anecdotesLength);
    }
    setSelected(randomNumber);
  }
  
  const registerVote = () => {
    const newVotes = [
      ...votes,
    ]
    newVotes[selected] = votes[selected] + 1;
    setVotes(newVotes);

    if(newVotes[selected] > votes[mostVotesIndex]) {
      setMostVotesIndex(selected);
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
      {anecdotes[selected]}
      </p>
      <p>
        has {votes[selected]} votes
      </p>
      <button onClick={registerVote}>Vote</button>
      <button onClick={randomAnecdote}>Next Anecdote</button>
      <h2>Anecdote with the most votes</h2>
      <p>{anecdotes[mostVotesIndex]}</p>
      <p>has {votes[mostVotesIndex]} votes</p>
    </div>
  )
}

export default App;