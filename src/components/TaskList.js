import React from "react";

function TaskList({ task, updateTaskList, onDeleteTask }) {
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

    const deleteTask = () => {
        fetch(`http://localhost:3004/tasks/${task.id}`, {
            method: "DELETE",
        })
            .then(resp => resp.json())
            .then(deletedTask => onDeleteTask(deletedTask))
        }

    return (
            <li>
            <input type="checkbox" onClick={updateTask}/>
            <span>{name}</span>
            <span>{time}</span>
            <button onClick={deleteTask}>
                X
            </button>
            </li>
    )
}

export default TaskList;