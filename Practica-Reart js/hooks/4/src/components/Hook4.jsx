import { useFetch } from "../useFetch";

const Hook4 = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos",
    []
  );

  return (
    <div>
      <h1>Hook 4</h1>
      <div>
        <ul>
          {error && <h2>Error {error}</h2>}
          {loading && <h2>Loading...</h2>}
          {data?.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hook4;
