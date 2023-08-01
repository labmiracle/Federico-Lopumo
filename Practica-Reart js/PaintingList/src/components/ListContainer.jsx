import React from "react";
import List from "./List";

function ListContainer(props) {
  const { listTask, updateTask, deleteTask } = props;

  return (
    <div className="taskcontainer">
      <h2>List</h2>
      <List
        listTask={listTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default ListContainer;
