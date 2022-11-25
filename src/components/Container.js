import styled from "styled-components";

const Container = ({ children }) => {
  return <Div>{children}</Div>;
};

export default Container;

const Div = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  margin-bottom: 100px;

  // 크기
  width: 580px;
  height: 700px;

  // 색 및 선
  background: #cce4ad;
  outline: 0.5px solid #6f6f6f;
  display: flex;
  flex-direction: column;
`;
