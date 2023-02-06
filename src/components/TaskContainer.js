import React from "react";
import TaskList from "./TaskList";

function TaskContainer({ tasks }) {
    const mappedTasks = tasks.map((task) => 
    <TaskList 
    key={task.id}
    task={task}
    />
   )

    return (
        <ul className="task-list">
            {mappedTasks}
        </ul>
    )
}

export default TaskContainer;