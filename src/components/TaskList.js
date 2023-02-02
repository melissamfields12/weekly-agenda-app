import React from "react";

function TaskList({task}) {
    const {name, time} = task;
    return (
        <div>
            <h4>{name}</h4>
            <p>{time}</p>
        </div>
    )
}

export default TaskList;