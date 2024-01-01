import React from 'react';
import ToDoItem from "../ToDoItem/ToDoItem";
import cl from "./ToDoList.module.css";
import CreateToDo from "../CreateToDo/CreateToDo.jsx";
const ToDoList = ({model}) => {
    return (
        <div className={cl.todoList}>
            {model ?
                (
                    <div>
                        <h2>{model.name}</h2>
                        <ToDoItem text="texto" checked={true} deleteAfterMarking={false} />
                        <ToDoItem text="texto" checked={true} deleteAfterMarking={false} />
                        {model.items.map((item, index) => (
                            <ToDoItem key={index} text={item.text} checked={item.checked} deleteAfterMarking={model.deleteAfterMarking} />
                        ))}
                        <CreateToDo list={model.items}/>
                    </div>
                ) :
                <h2>Select list</h2>
            }
        </div>
    );
};

export default ToDoList;