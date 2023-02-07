import React, { useState } from "react";

function TaskList({ task, updateTaskList }) {
    const [isCompleted, setIsCompleted] = useState('')
    const {name, time} = task;

    function updateTask() {
        fetch(`http://localhost3004/tasks/${task.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                isCompleted: setIsCompleted(isCompleted)
            }),
        })
            .then(resp => resp.json())
            .then(updatedTask => updateTaskList(updatedTask))
    }
    return (
            <li onClick={updateTask}>
            <span>{name}</span>
            <span>Time: {time}</span>
            </li>
    )
}

export default TaskList;