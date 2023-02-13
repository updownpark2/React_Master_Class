import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ require: true, minLength: 3 })`
  background-color: tomato;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  //Box의 모든 속성을 가져온다!
  border-radius: 50px;
`;

const Text = styled.span`
  color: white;
`;

const rotationAnimation = keyframes`
0%{
  transform: rotate(0deg);
  border-radius: 0px;
}

50%{transform: rotate(180deg);
  border-radius: 100px;

}
100%{
transform: rotate(360deg);
border-radius: 50px;

}
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Boxx = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 10px;
    }
  }

  span {
    &:hover {
      font-size: 50px;
    }
  }
`;
// 여기서부터 theme

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello!</Title>
    </Wrapper>
  );
}

export default App;
