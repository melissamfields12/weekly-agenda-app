import React from "react";
import GoalList from "./GoalList";

function GoalContainer({ goals }) {

    const mappedGoals = goals.map((goal) => <GoalList 
        key={goal.id}
        goal={goal}
        />
       )
    

    return (
        <div>
           {mappedGoals}
        </div>
    )
}

export default GoalContainer;