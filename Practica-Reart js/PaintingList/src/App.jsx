import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import ListContainer from "./components/ListContainer";

function App() {
  const [task, setTask] = useState("");

  const [listTask, setListTask] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (task === "") {
      alert("Please add a task");
      return;
    }

    const newTask = {
      id: Date.now(),
      task: task,
      completed: false,
    };

    const temp = [newTask, ...listTask];
    setListTask(temp);

    setTask("");
  }

  function handleChange(e) {
    setTask(e.target.value);
  }

  function updateTask(objEditTask) {
    const { id, task } = objEditTask;

    const temp = [...listTask];
    const element = temp.find((item) => item.id === id);
    element.task = task;

    setListTask(temp);
  }

  function deleteTask(id) {
    const temp = listTask.filter((item) => item.id !== id);
    setListTask(temp);
  }

  return (
    <>
      <div className="container">
        <h1>TO DO LIST</h1>

        <div className="formcontainer">
          <Form
            task={task}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>

        <ListContainer
          listTask={listTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
}

export default App;
