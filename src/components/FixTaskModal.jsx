import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: 20,
    width: 400,
    // padding: "50px",
  },
}));

function FixTaskModal(props) {
  const { tasks, taskId } = props;
  console.log("TASK ID HERE", taskId);
  const classes = useStyles();
  const [taskName, setTaskName] = useState(tasks[taskId].taskName);
  const [taskDescription, setTaskDescription] = useState(
    tasks[taskId].taskDescription
  );

  const updateTask = (e) => {
    e.preventDefault();
    // console.log("ID HERE", tasks[taskId]?._id);
    let form = {
      taskName: taskName,
      taskDescription: taskDescription,
      _id: tasks[taskId]?._id,
    };
    console.log("FORM", form);
    axios
      .put(`http://localhost:3000/api/task/`, form)
      .then((res) => {
        if (res.data) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.paper}>
      <TextField
        variant="outlined"
        type="string"
        style={{ display: "block", paddingBottom: 10 }}
        label="Task Name"
        defaultValue={tasks[taskId]?.taskName}
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
      />

      <TextField
        variant="outlined"
        style={{ display: "block", paddingBottom: 10 }}
        type="string"
        multiline="true"
        rows={10}
        rowsMax={10}
        label="Task Description"
        defaultValue={tasks[taskId]?.taskDescription}
        onChange={(e) => {
          setTaskDescription(e.target.value);
        }}
      />
      <Button variant="contained" color="primary" onClick={updateTask}>
        Sửa
      </Button>
    </div>
  );
}

export default FixTaskModal;
