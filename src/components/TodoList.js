import Todo from "./Todo";
import React, { useEffect, useState } from "react";
import axios from "axios";

// todos 배열을 map을 이용해서..
const TodoList = ({ todos, onRemove, checkBox }) => {
  const [state, setState] = useState({
    todoList: [],
  });

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:8000/list", {});
      setState((state) => (state.todoList = data));
    }
    fetchData();
  }, []);

  if (state.length > 0) {
    return (
      <>
        {state.map((todo) => {
          return (
            <Todo
              key={todo.TODO_ID}
              id={todo.TODO_ID}
              title={todo.TODO_TITLE}
              onRemove={onRemove}
              checkBox={checkBox}
            />
          );
        })}
      </>
    );
  } else {
    return;
  }
};

export default React.memo(TodoList);
