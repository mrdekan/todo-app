import React from 'react';
import cl from './Input.module.css';
const Input = (props) => {
    return (
        <input className={cl.input} type="text" {...props}/>
    );
};

export default Input;