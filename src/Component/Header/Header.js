import React from 'react';
import './Header.css';

const header = () => {
    return (
        <header>
            <div className='containerHeader'>
                <h1>Simple Todo App</h1>
                <p>Add to-dos items through the input field</p>
            </div>
        </header>
    )
}

export default header;