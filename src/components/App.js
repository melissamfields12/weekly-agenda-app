import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Form from "./Form";
import GoalContainer from "./GoalContainer";
import TaskContainer from "./TaskContainer";
import ShoppingContainer from "./ShoppingContainer";

function App() {
  const [goals, setGoals] = useState ([]);
  const [tasks, setTasks] = useState ([]);
  const [shoppingList, setShoppingList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3004/goals")
      .then(resp => resp.json())
      .then(goalList => setGoals(goalList));

    fetch("http://localhost:3004/tasks")
      .then(resp => resp.json())
      .then(taskList => setTasks(taskList));
  }, [])

  return (
    <div>
      <NavBar />
      <Form />
      <Switch>
        <Route exact path="/">
          <GoalContainer goals={goals} />
        </Route>
        <Route path="/weeklytasks">
        <TaskContainer tasks={tasks}/>
        </Route>
        <Route path="/shoppinglist">
          <ShoppingContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
