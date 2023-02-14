import { useState } from "react";
import styled from "styled-components";

const Container = styled.div<ContainerProps>`
  // styled-component에서 props를 사용할 때!
  background-color: ${(props) => props.bgColor};
  border: 6px solid black;
  border-color: ${(props) => props.borderColor};

  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  const [count, setCount] = useState<number>(0);
  // State에 대한 type 설명할 때
  console.log(count);
  return (
    //함수에서 props를 사용할 때 props의 타입에 대한 설명이 필요
    <Container borderColor={borderColor ?? "black"} bgColor={bgColor}>
      <button onClick={() => setCount((current) => current + 1)}>Hello!</button>
    </Container>
  );
}

export default Circle;
