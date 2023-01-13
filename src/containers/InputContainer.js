import { useDispatch } from "react-redux";
import Input from "../components/Input";
import { createTodo } from "../modules/todo";

const InputContainer = () => {
  const dispatch = useDispatch();
  const onCreate = (title) => dispatch(createTodo(title));

  return <Input onCreate={onCreate} />;
};

export default InputContainer;
