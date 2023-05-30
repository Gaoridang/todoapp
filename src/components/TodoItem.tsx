import { Todo } from '../store/types';
import styled from 'styled-components';
import { Div } from './TodoList';

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
  margin: 16px;
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

export const Title = styled.h1`
  font-size: 30px;
  font-family: ${(props) => props.theme.fontLogo};
  font-weight: ${(props) => props.theme.weightBold};
`;

const SubTitle = styled(Title)`
  font-size: 18px;
  font-weight: ${(props) => props.theme.weightRegular};
`;

const Btn = styled.button`
  position: absolute;
  top: -6px;
  right: 20px;
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  &:hover {
    background-color: #d5d5d5;
  }
  &:active {
    transform: scale(0.95);
  }
`;

interface Props {
  todos: Todo[];
  onDelete: (id: string) => void;
}

const TodoItem = ({ todos, onDelete }: Props) => {
  return (
    <>
      <LineWrapper>
        {todos.length > 0
          ? todos.map((todo) => (
              <Div key={todo.id}>
                <SubTitle>{todo.title}</SubTitle>
                <Btn onClick={() => onDelete(todo.id)}>Delete</Btn>
                <Line />
              </Div>
            ))
          : 'No items'}
      </LineWrapper>
    </>
  );
};

export default TodoItem;
