import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodosList extends Component {
    render() {
        return (
            <div>
                {this.props.todos.map(x => (
                    <TodoItem 
                        key={x.id} 
                        x={x}
                        changed={this.props.changeHandler}
                        delete={this.props.deleted} />
                ))}
            </div>
        )
    }
}

export default TodosList;