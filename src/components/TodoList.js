import Todo from "./Todo";
import React from "react";

// todos 배열을 map을 이용해서..
const TodoList = ({ todos, onRemove, onCheck }) => {
  if (todos.length > 0) {
    return (
      <>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              check={todo.check}
              onRemove={onRemove}
              onCheck={onCheck}
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
