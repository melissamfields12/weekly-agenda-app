import React from "react";
import TaskList from "./TaskList";

function TaskContainer({ tasks, updateTaskList, onDeleteTask }) {
    const mappedTasks = tasks.map((task) => 
    <TaskList 
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