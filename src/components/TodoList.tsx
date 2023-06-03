import { FormEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { AppState, Todo } from '../store/types';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../store/actions';
import Typed from 'typed.js';
import React from 'react';

// Component Styling
export const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #8690d9;
  font-family: ${(props) => props.theme.fontLogo};
  font-weight: ${(props) => props.theme.weightBold};
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
      if (title) {
        dispatch(addTodo(title));
        console.log(title, 'Dispatch completed');
        setTitle('');
      }
    },
    [dispatch, title]
  );

  const onAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const onDelete = useCallback(
    (id: string) => {
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Bucket List App', `Bring Your Bucket List to Life.`],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Div>
        <Title style={{ marginTop: '50px' }}>
          <span ref={el} />
        </Title>

        <form onSubmit={onSubmit}>
          <Input type="text" value={title} onChange={onAdd} placeholder="월 천 만원 벌기" />
          <button type="submit">추가하기</button>
        </form>
      </Div>
      <TodoItem todos={todos} onDelete={onDelete} />
    </>
  );
};

export default TodoList;
