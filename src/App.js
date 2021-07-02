import React from "react";
import Content from "././components/Content";
import AddNewTask from "././components/AddNewTask";

function App() {
  return (
    <>
      <div className="App">
        <h1>To Do App</h1>
        <AddNewTask />
        <Content />
      </div>
    </>
  );
}

export default App;
