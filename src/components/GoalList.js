import React from "react";

function GoalList({ goal }) {
    const {name, time, progress} = goal
    return (
        <div>
            <h4>{name}</h4>
            <p>{time}</p>
            <p>Progress: {progress}% completed</p>
        </div>
    )
}

export default GoalList;