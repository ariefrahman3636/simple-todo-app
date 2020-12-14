import React, { Component } from 'react';
import './InputTodo.css';

class InputTodo extends Component {
    state = {
        title: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log('works', e)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.todoHandler(this.state.title)
        this.setState({
            title: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input 
                        className='inputText'
                        type='text' 
                        placeholder='Enter new todo' 
                        value={this.state.input}
                        name='title'
                        onChange={this.onChange}
                        maxLength='100'
                        
                         />
                    <input 
                        type='submit' 
                        value='Add Todo'
                        className='submitBtn'  />
                </form>
            </div>
        )
    }
}

export default InputTodo;