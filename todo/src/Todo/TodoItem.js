import React from 'react';

export default function TodoItem(props) {

  const { removeTodo, todos } = props;
  let input;

  return (
    <div>
      {todos.map((todo, i) => {
        if (!todo.completed) {
          return <li key={i}>{todo.name}</li>;
        }})
      }
    </div>
  );
}