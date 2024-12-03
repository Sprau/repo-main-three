import { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../context/TodoContext';

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.map((elem) => (
        <TodoItem
          key={elem.id}
          id={elem.id}
          title={elem.title}
          completed={elem.completed}
        />
      ))}
    </div>
  );
}

export default TodoList;
