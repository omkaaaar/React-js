import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const TodoItem = ({ todo, fetchDetailsofCurrentTodo }) => {
  console.log(todo);

  return (
    <Card
      sx={{
        maxWidth: 556,
        // margin: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Typography variant="h5" color={"text.secondary"}>
          {todo.todo}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          onClick={() => fetchDetailsofCurrentTodo(todo.id)}
          sx={{
            // display: "flex",
            backgroundColor: "blue",
            color: "#fff",
            opacity: "0.75",
            "&:hover": {
              backgroundColor: "#fff",
              color: "blue",
              opacity: "1",
            },
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default TodoItem;
