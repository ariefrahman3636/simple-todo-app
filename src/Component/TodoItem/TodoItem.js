import React from 'react';
import './TodoItem.css';

const todoItem = props => {
   const { id, completed } = props.x
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
               onChange={() => props.changed(id)} />
               <span style={completed ? completedStyle : null}>
                  {props.x.title}
                  <span className='date'>{props.x.date.toLocaleDateString()}</span>
               </span>
            
            <button
              onClick={() => props.delete(props.x.id)} >Delete</button>
            
           </li>
        </div>        
   )     
}

export default todoItem;