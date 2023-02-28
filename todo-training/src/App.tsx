import React from "react";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import TodoInput from "./components/TodoInput";
import TodoPaint from "./components/TodoPaint";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 50vh;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <RecoilRoot>
      <Container>
        <TodoInput />
      </Container>
    </RecoilRoot>
  );
}

export default App;
