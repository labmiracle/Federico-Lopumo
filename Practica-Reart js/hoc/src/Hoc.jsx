import { useFetch } from "./useFetch";

const Hoc = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    []
  );

  return (
    <div>
      <h1>HOC</h1>
      <div>
        <ul>
          {error && <h2>Error {error}</h2>}
          {loading && <h2>Loading...</h2>}
          {data?.map((posts) => (
            <li key={posts.id}>{posts.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hoc;
