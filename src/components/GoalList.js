import React, { useState } from "react";

function GoalList({ goal, onDeleteGoal, updateProgress }) {
    const {name, progress} = goal;

    const [goalBar, setGoalBar] = useState(progress);    

    function updateGoalProgress(e) {
        setGoalBar(parseInt(e.target.value))
        fetch(`http://localhost:3004/goals/${goal.id}`, {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({progress: goalBar})
        })
            .then(resp => resp.json())
            .then(updatedGoal => updateProgress(updatedGoal))
    }

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
            {/* <span className="progress">{progress}% completed</span> */}
            <input
            onChange={updateGoalProgress} 
            type="range"
            min="0"
            max="100"
            // step="10"
            className="progress-bar"
            name={progress}
            value={goalBar}
            />
            <button 
                onClick={deleteGoal}
                className="delete-btn">
                X
            </button>
            </li> 
           
    )
}

export default GoalList;