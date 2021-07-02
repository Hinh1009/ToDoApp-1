import React, { useState } from "react";
import { Modal, Button, TextField } from "@material-ui/core/";
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

function AddNewTask() {
  const [openModal, setOpenModal] = useState(false);
  const [taskName, setTaskName] = useState([]);
  const [taskDescription, setTaskDescription] = useState([]);

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleAddNewTask = (e) => {
    e.preventDefault();
    let form = {
      taskName: taskName,
      taskDescription: taskDescription,
    };

    axios
      .post("http://localhost:3000/api/task", form)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const classes = useStyles();

  return (
    <>
      <div>
        <Button
          style={{ marginBottom: 20 }}
          onClick={handleClick}
          variant="outlined"
          color="inherit"
        >
          {" "}
          Thêm công việc mới{" "}
        </Button>
        <Modal
          style={{ width: "100%" }}
          open={openModal}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modal}
        >
          <div className={classes.paper}>
            <TextField
              variant="outlined"
              type="string"
              style={{ display: "block", paddingBottom: 10 }}
              label="Task Name"
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
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
            />

            <Button
              variant="contained"
              color="primary"
              onClick={handleAddNewTask}
            >
              Đăng
            </Button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default AddNewTask;
