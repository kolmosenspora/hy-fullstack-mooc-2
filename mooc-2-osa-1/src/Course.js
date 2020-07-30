import React from "react";

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Total = ({ course }) => {

    const sum = course.parts.reduce(function(a, b){
        return a + b.exercises;
    }, 0);

    console.log(sum)

    return(
        <p>Number of exercises {sum}</p>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            <ul>
                {
                    course.parts.map((course, i) => {
                        return (
                            <li key={i}>
                                <Part part={course}>
                                </Part>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const Course = ({courses}) => {

    return (
        <div>
            <ul>
                {
                    courses.map((course, i) => {
                        return (
                            <li key={i}>
                                <div>
                                    <Header course={course}/>
                                    <Content course={course}/>
                                    <Total course={course}/>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Course