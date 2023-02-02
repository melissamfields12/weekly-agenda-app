import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Form from "./Form";
import GoalContainer from "./GoalContainer";
import TaskContainer from "./TaskContainer";
import ShoppingContainer from "./ShoppingContainer";

function App() {
  return (
    <div>
      <NavBar />
      <Form />
      <Switch>
        <Route exact path="/">
          <GoalContainer />
        </Route>
        <Route path="/weeklytasks">
        <TaskContainer />
        </Route>
        <Route path="/shoppinglist">
          <ShoppingContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
