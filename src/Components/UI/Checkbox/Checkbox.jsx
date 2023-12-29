import React from 'react';
import './Checkbox.module.css';
const Checkbox = ({value, setValue}) => {
    return (
        <input type="checkbox" checked={value} onChange={e => setValue(e.target.checked)}/>
    );
};

export default Checkbox;