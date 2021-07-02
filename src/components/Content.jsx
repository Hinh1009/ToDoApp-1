import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import TaskAction from "./TaskAction";

function Content() {
  const [tasks, setTasks] = useState([]);
  // const [taskName, setTaskName] = useState([]);
  // const [taskDescription, setTaskDescription] = useState([]);

  const getAll = useEffect(() => {
    axios
      .get("http://localhost:3000/api/task")
      .then((res) => {
        if (res.data) {
          let datas = res.data;
          console.log("TASK", datas);
          setTasks(datas);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log("Hello");

  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:3000/api/task/${id}`)
      .then((res) => {
        if (res.data) {
          window.location.reload();
          getAll();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <TaskAction tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default Content;
