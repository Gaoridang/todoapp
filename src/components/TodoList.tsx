import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Title } from './TodoItem';
import TodoItem from './TodoItem';
import { Todo } from '../store/types';

// Component Styling
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px 20px;
  margin: 15px;
`;

// Main Component
const TodoList = () => {
  const [todos, setTodos] = useState<Todo[] | null>([]);
  const [title, setTitle] = useState('');

  const onAddTodo = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <>
      <Div>
        <Title style={{ marginTop: '50px' }}>BUCKET LIST APP</Title>
        <form>
          <Input type="text" value={title} onChange={onAddTodo} placeholder="월 천 만원 벌기" />
          <button type="submit">추가하기</button>
        </form>
      </Div>
      <TodoItem />
    </>
  );
};

export default TodoList;
