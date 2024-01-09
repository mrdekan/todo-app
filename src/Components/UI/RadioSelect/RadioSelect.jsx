import React from 'react';
import cl from './RadioSelect.module.css';
const RadioSelect = ({options, selectedOption, setSelectedOption}) => {
    return (
        <div className={cl.container}>
            {
                options.map(el =>
                    <div className={cl.option} key={el.name}>
                        <input type="radio" name="radioSelect" id={el.value} value={el.value} defaultChecked={el.name===selectedOption.name}/>
                        <label htmlFor={el.value}>{el.name}</label>
                    </div>
                )
            }
        </div>
    );
};

export default RadioSelect;