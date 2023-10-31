import { ToDoList } from 'components/templates/ToDoList';

export const ToDoListPage = () => {
  const toDoList = ['할 일 1', '할 일 2', '할 일 3'];

  return (
    <ToDoList toDoList={toDoList} />
  )
}