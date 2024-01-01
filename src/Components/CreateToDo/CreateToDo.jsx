import React, {useEffect, useState} from 'react';
import cl from './CreateToDo.module.css';
import ToDoInput from "../UI/Input/ToDoInput.jsx";
import SmallGradientButton from "../UI/GradientButton/SmallGradientButton.jsx";

const CreateToDo = ({list, callback}) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        setValue('');
    }, [list]);
    const buttonClasses = [cl.leftPart];
    if (value) buttonClasses.push(cl.active);
    const callbackHandler = () => {
        console.log("test")
        callback(
            {
                value: value,
                state: 0
            });
    }
    return (
        <div className={cl.container}>
            <div className={buttonClasses.join(' ')}>
                <SmallGradientButton onClick={callbackHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="currentColor">
                        <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
                    </svg>
                </SmallGradientButton>
            </div>
            <ToDoInput value={value} onChange={e => setValue(e.target.value)} placeholder="Enter your task..."/>
        </div>
    );
};

export default CreateToDo;