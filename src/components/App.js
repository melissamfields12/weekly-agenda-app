import React from "react";
import NavBar from "./NavBar";
import Form from "./Form";
import GoalContainer from "./GoalContainer";
import TaskContainer from "./TaskContainer";
import ShoppingContainer from "./ShoppingContainer";

function App() {
  return (
    <div >
      <h1>This is my project</h1>
      <NavBar />
      <Form />
      <GoalContainer />
      <TaskContainer />
      <ShoppingContainer />
    </div>
  );
}

export default App;
