import { useState } from "react";

export default function Task(props) {
  const { task } = props;

  const [edit, setEdit] = useState(false);

  function EditMode() {
    const [value, setValue] = useState(task.task);
    return (
      <div>
        <input type="text" value={value} />

        <button className="btn">Save</button>

        <button className="btndelete">Delete</button>
      </div>
    );
  }

  function EditModeDesactived() {
    return (
      <>
        <span>{task.task}</span>

        <button className="btn btnedit">Update</button>

        <button className="btn btndelete">Delete</button>
      </>
    );
  }

  return (
    <>
      <div className="taskcontainer" id={task.id}>
        {edit ? <EditMode /> : <EditModeDesactived />}
      </div>
    </>
  );
}
