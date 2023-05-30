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
  margin-top: 30px;
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

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
}

const TodoItem = ({ todos, onDelete }: Props) => {
  return (
    <>
      <LineWrapper>
        {todos.length > 0
          ? todos.map((todo) => (
              <Div key={todo.id} onClick={() => onDelete(todo.id)}>
                <SubTitle>{todo.title}</SubTitle>
                <Line />
              </Div>
            ))
          : 'No items'}
      </LineWrapper>
    </>
  );
};

export default TodoItem;
