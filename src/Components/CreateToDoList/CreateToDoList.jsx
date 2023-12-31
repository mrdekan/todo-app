import React, {useState} from 'react';
import Checkbox from "../UI/Checkbox/Checkbox";
import cl from './CreateToDoList.module.css';
import GradientButton from "../UI/GradientButton/GradientButton";
import Input from "../UI/Input/Input";
import { v4 as uuidv4 } from 'uuid';
const CreateToDoList = ({callback}) => {
    const [deleteAfterMarking, setDeleteAfterMarking] = useState(false);
    const [name, setName] = useState('');
    const callbackHandler = (e) => {
        e.preventDefault();
        callback({
            id: uuidv4(),
            name: name,
            deleteAfterMarking: deleteAfterMarking,
            items: []
        });
    }
    return (
        <form>
            <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
            <div className={cl.formGroup}>
            <Checkbox value={deleteAfterMarking} setValue={setDeleteAfterMarking}/>
                <p>
                    Delete ToDo after marking?
                </p>
            </div>
            <GradientButton onClick={(e)=>callbackHandler(e)}>Add</GradientButton>
        </form>
    );
};

export default CreateToDoList;