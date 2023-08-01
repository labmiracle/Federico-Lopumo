export default function Form(props) {
  const { task, handleSubmit, handleChange } = props;

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          placeholder="Add a task"
          onChange={handleChange}
          value={task}
        />

        <input
          type="submit"
          className="btn"
          value="ADD"
          onClick={handleSubmit}
        />
      </form>
    </>
  );
}
