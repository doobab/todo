import styled from "styled-components";
import Container from "./components/Container";
import InputContainer from "./containers/InputContainer";
import TodoContainer from "./containers/TodoContainer";
import TopBarContainer from "./containers/TopBarContainer";

function App() {
  return (
    <Background>
      <Container>
        <TopBarContainer />
        <TodoOutContainer>
          <TodoContainer />
        </TodoOutContainer>
        <InputContainer />
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
const TodoOutContainer = styled.div`
  width: 100%;
  overflow-y: auto;
`;
