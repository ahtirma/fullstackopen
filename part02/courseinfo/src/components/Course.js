import React from "react";
  
const Header = ({course}) => (
    <h2>{course.name}</h2>
);

const Part = ({part}) => (
    <p>{part.name} {part.exercises}</p>
)

const Content = ({course}) => {
    const parts = course.parts;
    return(
        <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
        </div>
    )
};

const Total = ({course}) => {
    const parts = course.parts;

    const exercisesArray = parts.map(part => part.exercises);

    const total = exercisesArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue
    );

    return(
        <p>
            <b>
            Total of {total} exercises
            </b>
        </p>
    )
};

const Course = ({course}) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course}/>
            <Total course={course} />
        </div>
    )
}

export default Course;