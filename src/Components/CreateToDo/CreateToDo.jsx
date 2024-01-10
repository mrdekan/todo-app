import React, {useEffect, useState} from 'react';
import cl from './CreateToDo.module.css';
import ToDoInput from "../UI/Input/ToDoInput.jsx";
import SmallGradientButton from "../UI/GradientButton/SmallGradientButton.jsx";

const CreateToDo = ({list, callback,placeholder,buttonRight,validation}) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    useEffect(() => {
        setValue('');
    }, [list]);
    useEffect(() => {
        const validationResult = validation(value);
        setError(validationResult.message);
    }, [value]);
    const buttonClasses = [cl.leftPart];
    if (value && !error) buttonClasses.push(cl.active);
    const containerClasses = [cl.container];
    if (buttonRight) containerClasses.push(cl.reverse);
    const callbackHandler = (e) => {
        e.preventDefault();
        if(!error)
            callback(value);
    }
    const handleEnterKeyPress = (e) => {
        if (e.key === 'Enter' && value) callbackHandler(e);
    };
    return (
        <div>
        <div className={containerClasses.join(' ')}>
            <div className={buttonClasses.join(' ')}>
                <SmallGradientButton onClick={(e)=>callbackHandler(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="currentColor">
                        <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
                    </svg>
                </SmallGradientButton>
            </div>
            <ToDoInput value={value} onChange={e => setValue(e.target.value)} onKeyDown={handleEnterKeyPress} placeholder={placeholder?placeholder:"Enter your task..."}/>
        </div>
            {error && <span className="validationError">{error}</span>}
        </div>
    );
};

export default CreateToDo;