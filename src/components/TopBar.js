import styled from "styled-components";
import React from "react";
import TopBarText from "./TopBarText";

// 맨 위 바
const TopBar = ({ dealt }) => {
  return (
    <BarContainer>
      <TopBarText />
      <ProgressContainer>
        <Progress>
          <Dealt dealt={dealt()} />
        </Progress>
        <ProgressNum>{dealt()}</ProgressNum>
      </ProgressContainer>
    </BarContainer>
  );
};

export default React.memo(TopBar);

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  // 크기
  width: 100%;
  height: 101px;

  // 색 및 선
  background: rgba(0, 0, 0, 0.19);
  outline: 0.3px solid #6f6f6f;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
`;
const ProgressContainer = styled.div`
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Progress = styled.div`
  display: flex;
  flex-direction: column-reverse;

  width: 30px;
  height: 42px;

  background-color: #ffffff;
  border: 0.5px solid #4a4a4a;
`;
const Dealt = styled.div`
  background-color: ${(props) =>
    props.dealt === "100%" ? "#83DA64" : "#e69e9e"};
  width: 100%;
  height: ${(props) => props.dealt};
`;
const ProgressNum = styled.span`
  font-family: "NanumBarunpen";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  color: #000000;
`;
