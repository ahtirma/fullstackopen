import React from 'react';

const Header = (props) => (
  <h1>{props.course}</h1>
);

const Part = (props) => (
  <p>{props.part} {props.exercise}</p>
)

const Content = (props) => {
  const part1 = props.parts[0];
  const part2 = props.parts[1];
  const part3 = props.parts[2];
  return(
    <div>
      <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} />
    </div>
)};

const Total = (props) => {
  const part1 = props.parts[0];
  const part2 = props.parts[1];
  const part3 = props.parts[2];
  return(
    <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
)};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];
  
  return(
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default App;