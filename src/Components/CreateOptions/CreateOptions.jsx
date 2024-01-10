import React from 'react';
import CreateToDo from "../CreateToDo/CreateToDo.jsx";
import  cl from './CreateOptions.module.css';
const CreateOptions = ({options,setOptions}) => {
    console.log(options)
    const addAnOption = (option) =>{
        console.log('adding')
        setOptions([...options,option]);
    }
    const validate = (option) => {
        if(options.includes(option))
            return {isValid: false, message: `The '${option}' option already exists`};
        return {isValid: true, message: ''};
    }
    return (
        <div className={cl.container}>
            <p>Options:</p>
        <div className={cl.containerOptions}>
            <ul>
            {options.map(el =>
                <li key={el}>{el}</li>
            )}
            </ul>
        </div>
        <CreateToDo callback={addAnOption} list={options} placeholder="Add an option..." buttonRight={true} validation={validate}/>
        </div>
    );
};

export default CreateOptions;