import { Todo } from '../store/types';
import styled from 'styled-components';
import { Close } from '@styled-icons/ionicons-solid';

// styled components
const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 40px;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 400px;
  border: 1px solid #e7e7e7;
  border-radius: 15px;
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
`;

// const Line = styled.div`
//   position: relative;
//   height: 1px;
//   width: 80vw;
//   background-color: black;
//   opacity: 0.2;
//   &::after {
//     content: '';
//     position: absolute;
//     right: 0;
//     top: 50%;
//     transform: translateY(-50%);
//     width: 4px;
//     height: 4px;
//     border-radius: 50%;
//     background-color: black;
//   }
// `;

const SubTitle = styled.h2`
  position: relative;
  padding: 1rem 2rem;
  font-size: 18px;
  cursor: pointer;
  font-family: ${(props) => props.theme.fontTitle};
  font-weight: ${(props) => props.theme.weightRegular};

  &:before {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    height: 2px;
    width: 65%;
    background-color: black;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  padding: 5px 5px;
  border-radius: 10px;
  transition: all 0.2s ease;
  background-color: transparent;

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
              <Card key={todo.id}>
                <SubTitle>{todo.title}</SubTitle>
                <CloseBtn onClick={() => onDelete(todo.id)}>
                  <Close size={20} />
                </CloseBtn>
              </Card>
            ))
          : 'No items'}
      </LineWrapper>
    </>
  );
};

export default TodoItem;
