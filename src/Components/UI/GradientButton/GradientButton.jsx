import React from 'react';
import  cl from './GradientButton.module.css';
const GradientButton = (props) => {
    return (
        <button className={cl.btnHover} {...props}>
            {props.children}
        </button>
    );
};

export default GradientButton;