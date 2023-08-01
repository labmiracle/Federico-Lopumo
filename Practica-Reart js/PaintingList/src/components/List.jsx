import React from "react";
import ListItem from "./ListItem";

function List(props) {
  const { listTask, updateTask, deleteTask } = props;

  return (
    <div className="infocontainer">
      {listTask.map((task) => (
        <ListItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default List;
