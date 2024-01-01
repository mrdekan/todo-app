import React from 'react';
import cl from  './GradientButton.module.css';
const SmallGradientButton = (props) => {
    return (
        <button className={[cl.btnHover,cl.smallBtn].join(' ')} {...props}>
            {props.children}
        </button>
    );
};

export default SmallGradientButton;