import React, { Component } from 'react';
import TodosList from '../TodosList/TodosList';
import Header from '../Header/Header';
import InputTodo from '../InputTodo/InputTodo';
import axios from 'axios';

class TodoContainer extends Component {
    state = {
        todos: [ ],
        show: false
      }
    
      todoChangeHandler = (id) => {
        this.setState( {
          todo: this.state.todos.map( x => {
              if(x.id === id) {
                x.completed = !x.completed
              }
              return x;
            }),
            show: !this.state.show
        });
      };
// Making a Delete Request
      deleteHandler = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => this.setState({
          todos: [
            ...this.state.todos.filter(x => {
              return x.id !== id;
            })
          ]
        }) 
      )
        
        console.log('works', id);
      }
// Making a POST request     
      AddTodoHandler = (title) => {
      axios.post('https://jsonplaceholder.typicode.com/posts',{
        title: title,
        completed: false
      })
      .then(response => this.setState({
        todos: [...this.state.todos, response.data]
      }) )
        }
// Making a GET request
    componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
        .then(response => this.setState({todos: response.data}))
    }

    render() {
        return (
            <div>
                <Header
                  headerShow={this.state.show} />
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