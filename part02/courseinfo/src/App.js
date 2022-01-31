import React from 'react';

const Course = ({course}) => {
  return (
    <>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course} />
    </>
  )
}

const Header = ({course}) => (
  <h1>{course.name}</h1>
);

const Part = ({part}) => (
  <p>{part.name} {part.exercises}</p>
)

const Content = ({course}) => {
  console.log('Displaying course',course);
  const parts = course.parts;
  return(
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
)};

const Total = ({course}) => {
  const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises;
  return(
    <p>
      <b>
      Total of {sum} exercises
      </b>
    </p>
)};

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  };
  
  return <Course course={course} />
}

export default App;