import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slicer/todo";



function App() {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector(
    (state) => state.todo
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todos</h2>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching todos</p>}

      <ul>
        {data.slice(0, 10).map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
