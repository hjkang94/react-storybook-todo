import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { ToDoListContext } from 'contexts/ToDoList';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputToDo = () => {
  const [toDo, setToDo] = useState('');
  const navigate = useNavigate();
  const { onAdd } = useContext(ToDoListContext);

  const onAddToDo = () => {
    if (!toDo) return;

    onAdd(toDo);
    setToDo('');
    navigate('/');
  }

  return (
    <Container>
      <Input value={toDo} onChange={setToDo} />
      <Button label="추가" color="#304ffe" onClick={onAddToDo} />
    </Container>
  )
}