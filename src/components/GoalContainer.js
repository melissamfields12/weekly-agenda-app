import React from "react";
import GoalList from "./GoalList";

function GoalContainer({ goals, onDeleteGoal }) {

    const mappedGoals = goals.map((goal) => 
        <GoalList 
        key={goal.id}
        goal={goal}
        onDeleteGoal={onDeleteGoal}
        />
       )
    

    return (
        <ul className="goals">
            {mappedGoals}
        </ul>
        
       
    )
}

export default GoalContainer;