import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: todo,
      anotherOne: ''
    };
  }

  addItem = newItemText => {
    const newItem = {
      task: newItemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  toggleItem  = id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };
  
  clearTodo = () => {
    this.setState({
      todo: this.state.todo.filter(item => !item.completed !== false)
    });
  };

  render() {
    console.log('rendering...');
    return (
      <div className="App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          toggleItem={this.toggleItem}
          todo={this.state.todo}
          clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;