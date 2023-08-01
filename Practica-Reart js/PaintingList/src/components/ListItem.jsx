import React, { useState } from "react";

function ListItem(props) {
  const { task, updateTask, deleteTask } = props;
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(task.task);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    updateTask({ id: task.id, task: value, completed: false });
    setEdit(false);
  }

  function EditMode() {
    return (
      <div>
        <input type="text" value={value} onChange={handleChange} />
        <button className="btn" onClick={handleClick}>
          Save
        </button>
        <button className="btndelete" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    );
  }

  function EditModeDesactived() {
    return (
      <>
        <span>{task.task}</span>
        <button className="btn btnedit" onClick={() => setEdit(true)}>
          Update
        </button>
        <button className="btndelete" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </>
    );
  }

  return (
    <div className="taskcontainer" id={task.id}>
      {edit ? <EditMode /> : <EditModeDesactived />}
    </div>
  );
}

export default ListItem;
