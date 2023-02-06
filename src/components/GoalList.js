import React from "react";

function GoalList({ goal }) {
    const {name, progress} = goal
    return (
            <li>
            <span>{name}</span>
            <br></br>
            <span className="progress">Progress: {progress}% completed</span>
            </li> 
           
    )
}

export default GoalList;