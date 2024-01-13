import React, {useState, useEffect, useCallback, useRef} from 'react';
import ToDoItem from "../ToDoItem/ToDoItem";
import cl from "./ToDoList.module.css";
import CreateToDo from "../CreateToDo/CreateToDo.jsx";
import Storage from "../../Utils/Storage.js";
import { v4 as uuidv4 } from 'uuid';
const ToDoList = ({list,setList,update}) => {
    const counter = useRef(null);
    const addToDo = (newTodo) =>{
        const todo = {
            value: newTodo,
            state: 0
        }
        Storage.addToDo(list.id, todo);
        setList(Storage.getToDoList(list.id));
    }
    const validate = (todo) => {
        return {isValid: true, message: ''};
    }
    const setToDoState = (index, state) => {
        Storage.setToDoState(list.id,index,state);
        if(counter.current && !list.deleteAfterMarking && list.type === 0)
        counter.current.innerHTML = `${list.name} (${Storage.getToDoList(list.id).items.filter(el => el.state !== 0).length}/${list.items.length})`;
    }

    const setToDoText = (index, text) => {
        Storage.setToDoText(list.id,index,text);
    }
    const deleteToDo = (index) => {
        Storage.deleteToDo(list.id,index);
        setList(Storage.getToDoList(list.id));
    }
    return (
        <div className={cl.todoList}>
            {list ?
                (
                    <div>
                        {list.deleteAfterMarking || list.type === 1
                            ?
                            <h2 key={list.id} ref={counter}>{list.name}</h2>
                            :
                            <h2 key={list.id} ref={counter}>{list.name} ({list.items.filter(el => el.state !== 0).length}/{list.items.length})</h2>
                        }

                        {list.items.map((item, index) => (
                            <ToDoItem key={uuidv4()} text={item.value} index={index} callbackState={setToDoState} callbackText={setToDoText} callbackDelete={deleteToDo} state={item.state} deleteAfterMarking={list.deleteAfterMarking} checkbox={list.type === 0} options={list.options}/>
                        ))}
                        <CreateToDo list={list.items} callback={addToDo} validation={validate}/>
                    </div>
                ) :
                <h2>Select a list</h2>
            }
        </div>
    );
};

export default ToDoList;