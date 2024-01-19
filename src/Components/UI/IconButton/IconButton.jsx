import React from 'react';
import cl from './IconButton.module.css';
const IconButton = ({children,callback}) => {
    return (
        <button className={cl.iconButton} onClick={callback}>{children}</button>
    );
};

export default IconButton;