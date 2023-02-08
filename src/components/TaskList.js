import React from "react";

function TaskList({ task, updateTaskList }) {
    const {name, time} = task;

    function updateTask() {
        fetch(`http://localhost:3004/tasks/${task.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
                body: JSON.stringify({
                isCompleted: !task.isCompleted,
            }),
        })
            .then(resp => resp.json())
            .then(updatedTask => updateTaskList(updatedTask))
    }
    return (
            <li>
            <input type="checkbox" onClick={updateTask}/>
            <span>{name}</span>
            <span>{time}</span>
            </li>
    )
}

export default TaskList;