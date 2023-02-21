import React from "react";
import GoalCard from "./GoalCard";

function GoalContainer({ goals, onDeleteGoal, updateProgress }) {

    const mappedGoals = goals.map((goal) => 
        <GoalCard 
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