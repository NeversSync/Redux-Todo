import React from 'react';

export default function TodoItem(props) {

  const { removeTodo, todos } = props;

  return (
    <div>
      {todos.map((todo, i) => {
        if (!todo.completed) {
          return <li onClick={props.handleClick} key={i}>{todo.name}</li>;
        }})
      }
    </div>
  );
}