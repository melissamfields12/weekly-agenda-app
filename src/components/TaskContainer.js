import React from "react";
import TaskCard from "./TaskCard";

function TaskContainer({ tasks, updateTaskList, onDeleteTask }) {
    const mappedTasks = tasks.map((task) => 
    <TaskCard 
        key={task.id}
        task={task}
        updateTaskList={updateTaskList}
        onDeleteTask={onDeleteTask}
    />
   )

    return (
        <ul className="task-list">
            {mappedTasks}
        </ul>
    )
}

export default TaskContainer;