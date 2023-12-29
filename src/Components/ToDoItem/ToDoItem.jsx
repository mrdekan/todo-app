import React, {useState} from 'react';
import Checkbox from "../UI/Checkbox/Checkbox";
import cl from "./ToDoItem.module.css";
const ToDoItem = ({text,checked}) =>
{
    const [value, setValue] = useState(checked);
    const lineClass = [cl.line];
    if(value) lineClass.push(cl.active);
    return (
        <div className={cl.todo}>
            <div className={lineClass.join(' ')}></div>
            <Checkbox value={value} setValue={setValue}/>
            <p>{text}</p>
        </div>
    );
};

export default ToDoItem;