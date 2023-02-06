import React from "react";

function TaskList({ task }) {
    const {name, time} = task;
    return (
            <li>
            <span>{name}</span>
            <span>Time: {time}</span>
            </li>
    )
}

export default TaskList;