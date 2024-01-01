import React, {useEffect, useState} from 'react';
import ToDoItem from "../ToDoItem/ToDoItem";
import cl from "./ToDoList.module.css";
import CreateToDo from "../CreateToDo/CreateToDo.jsx";
import Storage from "../../Utils/Storage.js";
const ToDoList = ({list,setList}) => {
    const addToDo = (todo) =>{
        Storage.addToDo(list.id, todo);
        setList(Storage.getToDoList(list.id));
    }
    const setToDoState = (index, state) => {
        Storage.setToDoState(list.id,index,state);
    }
    const setToDoText = (index, text) => {
        Storage.setToDoText(list.id,index,text);
        console.log(text)
    }
    return (
        <div className={cl.todoList}>
            {list ?
                (
                    <div>
                        <h2>{list.name}</h2>
                        {list.items.map((item, index) => (
                            <ToDoItem key={index} text={item.value} index={index} callbackState={setToDoState} callbackText={setToDoText} state={item.state} deleteAfterMarking={list.deleteAfterMarking} />
                        ))}
                        <CreateToDo list={list.items} callback={addToDo}/>
                    </div>
                ) :
                <h2>Select list</h2>
            }
        </div>
    );
};

export default ToDoList;