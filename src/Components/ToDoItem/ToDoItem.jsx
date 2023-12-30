import React, {useState} from 'react';
import Checkbox from "../UI/Checkbox/Checkbox";
import cl from "./ToDoItem.module.css";
import OptionsBtn from "../UI/OptionsBtn/OptionsBtn";
const ToDoItem = ({text,checked,deleteAfterMarking}) =>
{
    const [value, setValue] = useState(checked);
    function edit(){
        alert('editing');
    }
    function remove(){
        alert('deleting');
    }
    const options = [
        {
            name: 'Edit',
            func: edit
        },
        {
            name: 'Delete',
            func: remove
        }
    ]
    const lineClass = [cl.line];
    if(value) lineClass.push(cl.active);
    return (
        <div className={cl.todo}>
            <div className={cl.rightPart}>
                {deleteAfterMarking && <div className={lineClass.join(' ')}></div>}
                <Checkbox value={value} setValue={setValue}/>
                <p>{text}</p>
            </div>
            <OptionsBtn options={options}/>
        </div>
    );
};

export default ToDoItem;