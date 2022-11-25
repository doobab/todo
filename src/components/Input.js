import { useState } from "react";
import React from "react";
import styled from "styled-components";
import InputButton from "./InputButton";

const Input = ({ onCreate }) => {
  // value: title에 넣을 것
  const [value, setValue] = useState("");
  // message: title을 입력하지 않을 때
  const [message, setMessage] = useState("");

  // input에 변화가 생길 때 이벤트
  const onChange = (e) => {
    setValue(e.target.value);
  };

  // 제출할 때 이벤트: 입력 공백일 때 메세지
  const onSubmit = (e) => {
    if (value === "") {
      setMessage("입력해주세요.");
    } else {
      setMessage("");
      onCreate(value);
      setValue("");
    }
    e.preventDefault();
  };

  return (
    <Container onSubmit={onSubmit}>
      <StyledInput value={value} placeholder={message} onChange={onChange} />
      <InputButton />
    </Container>
  );
};

export default React.memo(Input);

const Container = styled.form`
  margin-top: auto;
  width: 100%;
  height: 106px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(255, 255, 255, 0.53);
  flex-shrink: 0;
`;
const StyledInput = styled.input`
  width: 450px;
  height: 50px;

  margin-left: 20px;

  background: #ffffff;
  border: 0.2px solid #6f6f6f;

  font-family: "NanumBarunpen";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  text-indent: 0.5em;
`;
