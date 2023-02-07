import React from "react";
import TaskList from "./TaskList";

function TaskContainer({ tasks, updateTaskList }) {
    const mappedTasks = tasks.map((task) => 
    <TaskList 
        key={task.id}
        task={task}
        updateTaskList={updateTaskList}
    />
   )

    return (
        <ul className="task-list">
            {mappedTasks}
        </ul>
    )
}

export default TaskContainer;