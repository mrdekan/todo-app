import React, {useState} from 'react';
import Checkbox from "../UI/Checkbox/Checkbox";
import cl from './CreateToDoList.module.css';
import GradientButton from "../UI/GradientButton/GradientButton";
import Input from "../UI/Input/Input";
import { v4 as uuidv4 } from 'uuid';
import Select from "../UI/Select/Select.jsx";
const CreateToDoList = ({callback}) => {
    const [deleteAfterMarking, setDeleteAfterMarking] = useState(false);
    const [name, setName] = useState('');
    const options = [
        {
            name: 'Checkbox',
            value: 0
        },
        {
            name: 'Select box',
            value: 1
        }
    ];
    const [selectedOption,setSelectedOption] = useState(options[0]);
    const callbackHandler = (e) => {
        e.preventDefault();
        const res = {
            id: uuidv4(),
            name: name,
            deleteAfterMarking: deleteAfterMarking,
            items: []
        };
        setName('');
        setDeleteAfterMarking(false);
        setSelectedOption(options[0]);
        callback(res);
    }
    return (
        <form>
            <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
            <Select options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
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