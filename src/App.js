import styled from "styled-components";
import { useState, useRef, useCallback } from "react";
import Container from "./components/Container";
import TodoList from "./components/TodoList";
import TopBar from "./components/TopBar";
import Input from "./components/Input";

function App() {
  // todo 배열
  const [todos, setTodos] = useState([]);

  // 진행도 계산을 위한 state
  // num: check된 todo 수
  const [num, setNum] = useState(0);
  // maxNum: todo 수
  const [maxNum, setMaxNum] = useState(0);

  // id 부여를 위한 ref
  const nextId = useRef(1);

  // todo 삭제 이벤트
  const onRemove = useCallback((id, check) => {
    // todo 삭제 -> maxNum - 1
    setMaxNum((maxNum) => (maxNum -= 1));
    // check가 되어 있다면 num - 1
    if (check === true) {
      setNum((num) => (num -= 1));
    }
    // id에 해당하는 todo 제거
    setTodos((todos) => todos.filter((todos) => todos.id !== id));
  }, []);

  // todo 생성
  const onCreate = useCallback((title) => {
    const tmp = {
      id: nextId.current,
      title,
    };
    // todos에 추가
    setTodos((todos) => todos.concat(tmp));
    // id + 1
    nextId.current += 1;
    // maxNum + 1
    setMaxNum((maxNum) => (maxNum += 1));
  }, []);

  // todo check 했을 때
  const checkBox = useCallback((check) => {
    // check가 안 되어있던 상태(check를 할 때)라면 num + 1
    if (check === false) {
      setNum((num) => (num += 1));
    }
    // check가 되어있던 상태(check를 해제 할 때)라면 num - 1
    else {
      setNum((num) => (num -= 1));
    }
  }, []);

  const dealt = useCallback(() => {
    return maxNum !== 0 ? Math.round((num / maxNum) * 100) + "%" : "0%";
  }, [num, maxNum]);

  return (
    <Background>
      <Container>
        <TopBar dealt={dealt} />
        <TodoContainer>
          <TodoList todos={todos} onRemove={onRemove} checkBox={checkBox} />
        </TodoContainer>
        <Input onCreate={onCreate} />
      </Container>
    </Background>
  );
}

export default App;

// 배경
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #d9ecf0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
const TodoContainer = styled.div`
  width: 100%;
  overflow-y: auto;
`;
