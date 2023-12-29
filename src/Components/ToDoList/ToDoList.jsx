import React from 'react';
import ToDoItem from "../ToDoItem/ToDoItem";
import cl from "./ToDoList.module.css";
const ToDoList = ({model}) => {
    return (
        <div className={cl.todoList}>
            <h2>{model.name}</h2>
            {model.items.map((item,index)=>
                <ToDoItem key={index} text={item.text} checked={item.checked}/>
            )}
        </div>
    );
};

export default ToDoList;