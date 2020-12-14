import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

//The componentDidUpdate() method
    componentDidUpdate(prevProps, prevState) {
        let x = Math.floor(Math.random() * 256)
        let y = Math.floor(Math.random() * 256)
        let z = Math.floor(Math.random() * 256)
        let color = "rgb(" + x + ',' + y + ',' + z + ")";
        if( prevProps.headerShow !== this.props.headerShow ) {
            document.getElementById('headerTodo').style.color = color;
            console.log('props change');
        }
    }
    render() {
        return (
            <header>
                <div className='containerHeader'>
                    <h1 id="headerTodo">Simple Todo App</h1>
                    <p>Add to-dos items through the input field</p>
                </div>
            </header>
        )
    }
}

export default Header;