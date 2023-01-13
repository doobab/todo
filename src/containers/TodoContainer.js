import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/TodoList";
import { checkTodo, removeTodo } from "../modules/todo";

const TodoContainer = () => {
  const { todos } = useSelector((state) => ({
    todos: state.todoList,
  }));

  const dispatch = useDispatch();
  const onRemove = (id) => dispatch(removeTodo(id));
  const onCheck = (id) => dispatch(checkTodo(id));

  return <TodoList todos={todos} onRemove={onRemove} onCheck={onCheck} />;
};

export default TodoContainer;
