import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Form from "./Form";
import Home from "./Home";
import GoalContainer from "./GoalContainer";
import TaskContainer from "./TaskContainer";

function App() {
  const [goals, setGoals] = useState ([]);
  const [tasks, setTasks] = useState ([]);

  useEffect(() => {
    fetch("http://localhost:3004/goals")
      .then(resp => resp.json())
      .then(goalList => setGoals(goalList));

    fetch("http://localhost:3004/tasks")
      .then(resp => resp.json())
      .then(taskList => setTasks(taskList));
  }, [])

  function addNewItem(newItem, type) {
   type === "goals" ? setGoals(goals => [...goals, newItem]) :
    setTasks(tasks => [...tasks, newItem])
  }

  function updateTaskList(updatedTask) {
    const updatedTasks = tasks.map((task) => {
      if(task.id === updatedTask.id) {
          return updatedTask;
        } else {
          return task;
        }
    })
    setTasks(updatedTasks)
  }

  const onDeleteTask = (deletedTask) => {
    const currentTasks = tasks.filter((task) => task.id !== deletedTask)
      setTasks(currentTasks)
    }

  return (
    <div>
      <NavBar />
      <br></br>
      <Form addNewItem={addNewItem}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/weeklygoals">
          <GoalContainer goals={goals}/>
        </Route>
        <Route path="/weeklytasks">
          <TaskContainer tasks={tasks} updateTaskList={updateTaskList} onDeleteTask={onDeleteTask}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
