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

    function deleteTask() {
        fetch(`http://localhost:3004/tasks/${task.id}`, {
            method: "DELETE",
        })
            .then(resp => resp.json())
            .then(() => onDeleteTask(task))
        }

    return (
            <li className={task.isCompleted ? "is-complete" : ""}>
            <input type="checkbox" onClick={updateTask}/>
            <span>{name}</span>
            <span>{time}</span>
            <button 
                onClick={deleteTask}
                className="delete-btn">
                X
            </button>
            </li>
    )
}

export default TaskList;