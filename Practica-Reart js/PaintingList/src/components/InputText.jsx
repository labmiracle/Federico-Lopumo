import React from "react";

function InputText(props) {
  const { task, handleChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} action="">
      <input
        type="text"
        placeholder="Add a task"
        onChange={handleChange}
        value={task}
      />
      <input type="submit" className="btn" value="ADD" onClick={handleSubmit} />
    </form>
  );
}

export default InputText;
