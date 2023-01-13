/* 액션 타입(Ducks 패턴) */

const GET_TODO_DATA = "todo/GET_TODO_DATA";
const GET_ID = "todo/GET_ID";
const REMOVE_TODO = "todo/REMOVE_TODO";
const CREATE_TODO = "todo/CREATE_TODO";
const CHECK_TODO = "todo/CHECK_TODO";

/* 액션 생성 함수 */
export const getTodoData = () => ({ type: GET_TODO_DATA });
export const getId = () => ({ type: GET_ID });
export const removeTodo = (id) => ({ type: REMOVE_TODO, id });
export const createTodo = (title) => ({ type: CREATE_TODO, title });
export const checkTodo = (id) => ({ type: CHECK_TODO, id });

/* 초기 상태 선언 */
const initialState = {
  // 체크된 todo 수
  check_num: 0,
  // todo 전체 수
  all_num: 1,
  // 가장 큰 id 숫자
  max_id: 0,
  todoList: [
    {
      id: 0,
      title: "안녕",
      check: false,
    },
  ],
};

/* 리듀서 선언 */
export default function todo(state = initialState, action) {
  switch (action.type) {
    case REMOVE_TODO:
      const todoIndexForRemove = state.todoList.findIndex(
        (todo) => todo.id === action.id
      );
      console.log(state.todoList[todoIndexForRemove].check);
      return {
        ...state,
        check_num: state.todoList[todoIndexForRemove].check
          ? state.check_num - 1
          : state.check_num,
        all_num: state.all_num - 1,
        todoList: state.todoList.filter((todo) => todo.id !== action.id),
      };
    case CREATE_TODO:
      return {
        ...state,
        all_num: state.all_num + 1,
        max_id: state.max_id + 1,
        todoList: state.todoList.concat({
          id: state.max_id + 1,
          title: action.title,
          check: false,
        }),
      };
    case CHECK_TODO:
      const todoIndexForCheck = state.todoList.findIndex(
        (todo) => todo.id === action.id
      );
      const copiedTodoList = [...state.todoList];
      copiedTodoList[todoIndexForCheck].check = state.todoList[
        todoIndexForCheck
      ].check
        ? false
        : true;
      return {
        ...state,
        check_num: copiedTodoList[todoIndexForCheck].check
          ? state.check_num + 1
          : state.check_num - 1,
        todoList: copiedTodoList,
      };
    default:
      return state;
  }
}
