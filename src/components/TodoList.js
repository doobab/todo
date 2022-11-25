import Todo from "./Todo";
import React from "react";

// todos 배열을 map을 이용해서..
const TodoList = ({ todos, onRemove, checkBox }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            todo={todo}
            onRemove={onRemove}
            checkBox={checkBox}
          />
        );
      })}
    </>
  );
};

export default React.memo(TodoList);
