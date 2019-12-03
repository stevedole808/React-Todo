import React from 'react';

 const Todo = props => {
     return (
         <div  onClick={() => props.toggleItem(this.props.item.id)} >
             <p>{props.item.task}</p>
         </div>
     )
 };

 export default Todo;
