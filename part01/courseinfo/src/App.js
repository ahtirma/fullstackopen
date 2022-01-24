import React from 'react';

const Header = (props) => (
  <h1>{props.course}</h1>
);

const Part = (props) => (
  <p>{props.part} {props.exercise}</p>
)

const Content = (props) => {
  console.log(props);
  const part1 = props.part1;
  const part2 = props.part2;
  const part3 = props.part3;
  return(
    <div>
      <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} />
    </div>
)};

const Total = (props) => (
  <p>Number of exercises {props.exercises}</p>
);

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };
  
  return(
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
}

export default App;