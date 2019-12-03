// import React from 'react';
// import Todo from './Todo';

// const TodoList = props => {
//   return (
//     <div >
//       {props.todo.map(item => (
//         <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
//       ))}
//       <button onClick={props.clearTodo}>
//         Clear Todo
//       </button>
//     </div>
//   );
// };

// export default TodoList;
import React from 'react';
import Todo from './Todo';


const TodoList = props => {

    return(
        <div className="todolist">
            {props.todos.map(item => (
                <Todo
                key= {item.id}
                item= {item}
                toggleTodos={props.toggleTodos}
                />
            ))}
            <button onClick ={props.deleteCompleted}>Delete Completed</button>
        
        </div>
    )
}

export default TodoList;