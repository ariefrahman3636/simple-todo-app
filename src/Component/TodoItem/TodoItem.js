import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
   // The componentWillUnmount() method
   componentWillUnmount() {
      alert("This todo will be deleted!");
   }

   render() {
      const { id, completed } = this.props.x
      const completedStyle = {
         color: "#d35e0f",
         opacity: 0.4,
         textDecoration: "line-through"
   }

      return (
         <div>
            <li className='todoItem'>
             <input 
                className='inputCheckbox'
                type="checkbox"
                checked={completed}
                onChange={() => this.props.changed(id)} />
                <span style={completed ? completedStyle : null}>
                   {this.props.x.title}
                </span>
             <button
               onClick={() => this.props.delete(this.props.x.id)} >Delete</button>
            </li>
         </div>        
      )     
   }
}

export default TodoItem;