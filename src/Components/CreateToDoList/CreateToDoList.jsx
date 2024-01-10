import React, {useState} from 'react';
import Checkbox from "../UI/Checkbox/Checkbox";
import cl from './CreateToDoList.module.css';
import GradientButton from "../UI/GradientButton/GradientButton";
import Input from "../UI/Input/Input";
import { v4 as uuidv4 } from 'uuid';
import RadioSelect from "../UI/RadioSelect/RadioSelect.jsx";
import CreateOptions from "../CreateOptions/CreateOptions.jsx";
const CreateToDoList = ({callback}) => {
    const [deleteAfterMarking, setDeleteAfterMarking] = useState(false);
    const [name, setName] = useState('');
    const [options,setOptions] = useState([]);

    const types = [
        {
            name: 'Checkbox',
            value: 0
        },
        {
            name: 'Select box',
            value: 1
        }
    ];
    const [selectedOption,setSelectedOption] = useState(types[0]);
    const callbackHandler = (e) => {
        e.preventDefault();
        const res = {
            id: uuidv4(),
            name: name,
            deleteAfterMarking: deleteAfterMarking,
            type: selectedOption.value,
            options: [],
            items: []
        };
        setName('');
        setSelectedOption(types[0]);
        setDeleteAfterMarking(false);
        setSelectedOption(types[0]);
        callback(res);
    }
    return (
        <form>
            <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
            <RadioSelect options={types} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
            {selectedOption.value===1 && <CreateOptions options={options} setOptions={setOptions}/>}
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