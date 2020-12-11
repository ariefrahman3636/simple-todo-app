import React, { Component } from 'react';
import TodosList from '../TodosList/TodosList';
import Header from '../Header/Header';
import InputTodo from '../InputTodo/InputTodo';

class TodoContainer extends Component {
    state = {
        todos: [
            { id: Math.floor(Math.random() * 1000), title: 'Simple App Todo', date: new Date(), completed: false },
        ] 
      }
    
      todoChangeHandler = (id) => {
        this.setState( {
          todo: this.state.todos.map( x => {
              if(x.id === id) {
                x.completed = !x.completed
              }
              return x;
            }),
        });
      };

      deleteHandler = (id) => {
        this.setState({
          todos: [
            ...this.state.todos.filter(x => {
              return x.id !== id;
            })
          ]
        })
        console.log('works', id);
      }
     
      AddTodoHandler = (title) => {
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        title: title,
        date: new Date(),
        completed: false
      }
      this.setState({
        todos: [...this.state.todos, newTodo]
      })
        }

    

    render() {
        return (
            <div>
                <Header />
                <InputTodo
                  todoHandler={this.AddTodoHandler} />
                <TodosList 
                  todos={this.state.todos}
                  changeHandler={this.todoChangeHandler}
                  deleted={this.deleteHandler} />
            </div>
        )
    }
} 
        

export default TodoContainer;