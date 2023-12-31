import React from 'react';
import './Input.module.css';
const Input = (props) => {
    return (
        <input type="text" {...props}/>
    );
};

export default Input;