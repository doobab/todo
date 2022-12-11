import Todo from "./Todo";
import React from "react";

// todos 배열을 map을 이용해서..
const TodoList = ({ todos, onRemove, checkBox }) => {
  if (todos.length > 0) {
    return (
      <>
        {todos.map((todo) => {
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
