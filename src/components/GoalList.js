import React from "react";

function GoalList({ goal, onDeleteGoal }) {
    const {name, progress} = goal

    const deleteGoal = () => {
        fetch(`http://localhost:3004/goals/${goal.id}`, {
            method: "DELETE",
        })
            .then(resp => resp.json())
            .then(() => onDeleteGoal(goal))
    }

    return (
            <li>
            <span>{name}</span>
            <br></br>
            <span className="progress">{progress}% completed</span>
            <button 
                onClick={deleteGoal}
                className="delete-btn">
                X
            </button>
            </li> 
           
    )
}

export default GoalList;