import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Title } from './TodoItem';
import TodoItem from './TodoItem';
import { AppState, Todo } from '../store/types';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/actions';

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
  const todos = useSelector<AppState, Todo[]>((state) => state.todos);
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(addTodo(title));
      console.log(title, 'Dispatch completed');
      setTitle('');
    },
    [dispatch, title]
  );

  const onAddTodo = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <>
      <Div>
        <Title style={{ marginTop: '50px' }}>BUCKET LIST APP</Title>
        <form onSubmit={onSubmit}>
          <Input type="text" value={title} onChange={onAddTodo} placeholder="월 천 만원 벌기" />
          <button type="submit">추가하기</button>
        </form>
      </Div>
      <TodoItem todos={todos} />
    </>
  );
};

export default TodoList;
