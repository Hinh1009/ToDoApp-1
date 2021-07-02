import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import FixTaskModal from "./FixTaskModal";
import { useState } from "react";

const useStyles = makeStyles(
  (theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
    },
  }),
  {
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
  }
);

function TaskAction(props) {
  let { tasks, deleteTask } = props;
  let [taskId, setTaskId] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log("Can open here");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = (id) => {
    setTaskId(id);
  };
  // if (taskId !== "") console.log("TASK ID", taskId);
  const classes = useStyles();
  return (
    <>
      <h1>Task to do here</h1>
      {tasks && tasks.length > 0 ? (
        <div>
          {tasks?.map((task, id) => (
            <>
              <Card className={classes.root} key={id}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {task.taskName}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {task.taskDescription}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    onClick={() => {
                      handleOpen();
                      handleUpdate(id);
                    }}
                  >
                    Sửa
                  </Button>
                  <Button
                    size="small"
                    color="secondary"
                    variant="outlined"
                    onClick={() => deleteTask(task._id)}
                  >
                    Xoá
                  </Button>
                </CardActions>
              </Card>
            </>
          ))}
          <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <FixTaskModal tasks={tasks} taskId={taskId} />
          </Modal>
        </div>
      ) : (
        <>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Nothing to render
              </Typography>
            </CardContent>
          </Card>
        </>
      )}
    </>
  );
}

export default TaskAction;
