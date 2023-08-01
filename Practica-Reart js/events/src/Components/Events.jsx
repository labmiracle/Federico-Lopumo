import { useState } from "react";

function Events() {
  const [api, setApi] = useState("");

  async function request() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const jsonData = await response.json();
    setApi(jsonData);
  }

  return (
    <div className="container">
      <button onClick={request}>Pintar JSON</button>

      <h4>{JSON.stringify(api)}</h4>
    </div>
  );
}

export default Events;
