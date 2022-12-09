import styled from "styled-components";
import React from "react";

const InputButton = () => {
  return <Button type="submit">입력</Button>;
};

export default React.memo(InputButton);

const Button = styled.button`
  margin-right: 20px;
  width: 70px;
  height: 44px;

  background: #6d8b68;
  border: 0.5px solid #6f6f6f;
  border-radius: 10px;

  font-family: "NanumBarunpen";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  color: #ffffff;
  cursor: pointer;
`;
