import styled from "styled-components";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import React from "react";
import { useState } from "react";

const Todo = ({ id, title, onRemove, checkBox }) => {
  // check state
  const [check, setCheck] = useState(false);
  // mouseOver state
  const [mouseOver, setMouseOver] = useState(false);

  // check에 변화가 생겼을 때 이벤트
  const onClickforCheck = () => {
    setCheck(!check);
    checkBox(check);
  };

  return (
    <Container
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
      chk={check}
    >
      <Checkbox onClick={onClickforCheck}>
        {check ? (
          <MdOutlineCheckBox size="34" color="#6f6f6f" />
        ) : (
          <MdOutlineCheckBoxOutlineBlank size="34" color="#6F6F6F" />
        )}
        <TodoName chk={check}>{title}</TodoName>
      </Checkbox>
      <Trashcan onClick={() => onRemove(id, check)}>
        {mouseOver ? <IoTrashOutline size="25" color="#D06363" /> : <></>}
      </Trashcan>
    </Container>
  );
};

export default React.memo(Todo);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 78px;

  background: ${(props) => (props.chk ? "#dfdfdf" : "#ffffff")};
  border-bottom: 0.5px solid #6f6f6f;
`;
const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 22px;
  cursor: pointer;
`;
const TodoName = styled.span`
  font-family: "NanumBarunpen";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  margin-left: 5px;

  text-decoration: ${(props) => (props.chk ? "line-through" : "")};
`;
const Trashcan = styled.div`
  display: flex;
  align-items: center;
  margin-right: 17px;
  cursor: pointer;
`;
