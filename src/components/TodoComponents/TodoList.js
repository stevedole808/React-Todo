import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div >
      {props.todo.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button onClick={props.clearTodo}>
        Clear Todo
      </button>
    </div>
  );
};

export default TodoList;