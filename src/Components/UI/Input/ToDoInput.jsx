import React from 'react';
import cl from './ToDoInput.module.css';
const ToDoInput = (props) => {
    return (
        <input className={cl.todoInput} type="text" {...props}/>
    );
};

export default ToDoInput;