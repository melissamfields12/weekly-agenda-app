import React from "react";

function GoalList({ goal }) {
    const {name, time, progress} = goal
    return (
            <li>
            <span>{name}</span>
            <span className="progress">Progress: {progress}% completed</span>
            </li>
    )
}

export default GoalList;