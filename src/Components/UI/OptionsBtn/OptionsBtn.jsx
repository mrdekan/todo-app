import React, { useState } from 'react';
import cl from './OptionsBtn.module.css';
import Options from "../Options/Options";
const OptionsBtn = ({options}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={cl.optionsButton} onClick={()=>setIsOpen(true)}>
            <div className={cl.circle}></div>
            <div className={cl.circle}></div>
            <div className={cl.circle}></div>
            <Options isOpen={isOpen} setIsOpen={setIsOpen} options={options}/>
        </div>
    );
};

export default OptionsBtn;