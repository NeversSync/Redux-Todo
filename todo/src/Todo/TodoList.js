import React from 'react';
import TodoItemContainer from './TodoItemContainer';

export default function TodoList(props) {

  const { addTodo, removeTodo, todos, dispatch } = props;
  let input;

  return (
    <div>
      <ul>
      <TodoItemContainer/>
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(e.target.elements.newTodo.value);
      }}>
        <input name='newTodo'></input>
        <button>Add Todo</button>
      </form>
    </div>
  );
}