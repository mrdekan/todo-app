import React, {useState, useEffect, useCallback, useRef} from 'react';
import ToDoItem from "../ToDoItem/ToDoItem";
import cl from "./ToDoList.module.css";
import CreateToDo from "../CreateToDo/CreateToDo.jsx";
import Storage from "../../Utils/Storage.js";
import { v4 as uuidv4 } from 'uuid';
const ToDoList = ({list,setList,update}) => {
    const counter = useRef(null);
    const addToDo = (todo) =>{
        Storage.addToDo(list.id, todo);
        setList(Storage.getToDoList(list.id));
    }
    const setToDoState = (index, state) => {
        Storage.setToDoState(list.id,index,state);
        if(counter.current && !list.deleteAfterMarking)
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
                        {list.deleteAfterMarking
                            ?
                            <h2 key={list.id} ref={counter}>{list.name}</h2>
                            :
                            <h2 key={list.id} ref={counter}>{list.name} ({list.items.filter(el => el.state !== 0).length}/{list.items.length})</h2>
                        }

                        {list.items.map((item, index) => (
                            <ToDoItem key={uuidv4()} text={item.value} index={index} callbackState={setToDoState} callbackText={setToDoText} callbackDelete={deleteToDo} state={item.state} deleteAfterMarking={list.deleteAfterMarking} />
                        ))}
                        <CreateToDo list={list.items} callback={addToDo}/>
                    </div>
                ) :
                <h2>Select a list</h2>
            }
        </div>
    );
};

export default ToDoList;