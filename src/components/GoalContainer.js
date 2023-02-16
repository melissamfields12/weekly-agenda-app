import React from "react";
import GoalList from "./GoalList";

function GoalContainer({ goals, onDeleteGoal, updateProgress }) {

    const mappedGoals = goals.map((goal) => 
        <GoalList 
        key={goal.id}
        goal={goal}
        onDeleteGoal={onDeleteGoal}
        updateProgress={updateProgress}
        />
       )
    

    return (
        <ul className="goals">
            {mappedGoals}
        </ul>
        
       
    )
}

export default GoalContainer;