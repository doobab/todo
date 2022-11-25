import styled from "styled-components";
import React from "react";
import dayjs from "dayjs";

const TopBarText = () => {
  // 날짜
  var now = dayjs();

  return <Text>{now.format("YYYY년 MM월 DD일")}</Text>;
};

export default React.memo(TopBarText);

const Text = styled.div`
  display: inline-block;
  margin-left: 42px;

  // 글씨
  font-family: "NanumBarunpen";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 46px;
  letter-spacing: 0.285em;
  color: #000000;
`;
