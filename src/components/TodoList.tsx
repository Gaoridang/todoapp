import { FormEvent, useState } from 'react';
import { Todo } from '../store/types';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  font-family: ${(props) => props.theme.fontLogo};
  font-weight: ${(props) => props.theme.weightBold};
`;

const SubTitle = styled(Title)`
  font-size: 18px;
  font-weight: ${(props) => props.theme.weightRegular};
`;

const Input = styled.input`
  padding: 10px 20px;
  margin: 15px;
`;

const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 40px;
`;

const Line = styled.div`
  position: relative;
  height: 1px;
  width: 80vw;
  background-color: black;
  opacity: 0.2;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: black;
  }
`;

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[] | undefined>([]);

  const onAddTodo = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Div>
        <Title style={{ marginTop: '50px' }}>BUCKET LIST APP</Title>
        <form>
          <Input type="text" onChange={onAddTodo} placeholder="월 천 만원 벌기" />
        </form>
      </Div>
      <LineWrapper>
        <Line />
        <SubTitle>테슬라 200주</SubTitle>
        <Line />
        <SubTitle>한강변 아파트</SubTitle>
        <Line />
        <SubTitle>월 방문자 1000명 이상 웹앱 제작</SubTitle>
        <Line />
        <SubTitle>독서 모임 모집</SubTitle>
        <Line />
        <SubTitle>월 1회 국내 여행 & 분기 1회 해외 여행</SubTitle>
        <Line />
      </LineWrapper>
      <form></form>
    </>
  );
};

export default TodoList;
