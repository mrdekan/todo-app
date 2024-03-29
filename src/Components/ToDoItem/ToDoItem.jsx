import React, {useRef, useState} from 'react';
import Checkbox from "../UI/Checkbox/Checkbox";
import cl from "./ToDoItem.module.css";
import OptionsBtn from "../UI/OptionsBtn/OptionsBtn";
import ToDoInput from "../UI/Input/ToDoInput.jsx";
import SmallGradientButton from "../UI/GradientButton/SmallGradientButton.jsx";
import useSound from "use-sound";
import penSound from './penSound.mp3';
import Select from "../UI/Select/Select.jsx";

const ToDoItem = ({text, deleteAfterMarking, state, callbackState, callbackText,callbackDelete, index, checkbox, options}) => {
    const [value, setValue] = useState(state === 1);
    const [currState, setCurrState] = useState(state);
    const [content, setContent] = useState(text);
    const [isEditing, setIsEditing] = useState(false);
    const ref = useRef(null);
    const [classes, setClasses] = useState([cl.todo]);
    const [play] = useSound(penSound);
    const handleOutsideClick = (event) => {
        if (ref.current && !ref.current.contains(event.target))
            stopEdit();
    };
    function edit() {
        setIsEditing(true);
        document.addEventListener('click', handleOutsideClick,true);
    }
    function stopEdit() {
        setIsEditing(false);
        document.removeEventListener('click', handleOutsideClick,true);
    }
    function remove() {
        setClasses([...classes,cl.deleted]);
        window.setTimeout(()=>callbackDelete(index),200);
    }

    const optionsContext = [
        {
            name: 'Edit',
            func: edit
        },
        {
            name: 'Delete',
            func: remove
        }
    ]
    const lineClass = [cl.line];
    if ((value && checkbox) || (options && options[options.length-1] && currState === options[options.length-1].value)) lineClass.push(cl.active);
    if(deleteAfterMarking)
        options = options.filter(el => el.value >= currState);
    const checkboxHandler = (val) => {
        setValue(val);
        callbackState(index, val ? 1 : 0);
        setCurrState(value);
        if(deleteAfterMarking && val!==0){
            play();
            window.setTimeout(()=>remove(),400);
        }
    }
    const saveText = ()=>{
        callbackText(index,content);
        stopEdit();
    }
    const selectHandler = (value) => {
        callbackState(index, value);
        setCurrState(value);
        if(deleteAfterMarking && value === options[options.length-1].value){
            play();
            window.setTimeout(()=>remove(),400);
        }
    }
    return (
        <div className={classes.join(' ')} ref={ref}>
            <div className={cl.rightPart}>
                {deleteAfterMarking && <div className={lineClass.join(' ')}></div>}
                {isEditing
                    ?
                    <>
                        <SmallGradientButton onClick={saveText}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                            </svg>
                        </SmallGradientButton>
                        <ToDoInput value={content} onChange={e => setContent(e.target.value)}/>
                    </>
                    :
                    <>
                    {checkbox
                        ?<Checkbox value={value} setValue={checkboxHandler}/>
                        :<div className={cl.selectContainer}><Select options={options} selectedOption={currState} setSelectedOption={selectHandler}/></div>
                    }
                        <p className={cl.textContent}>{content}</p>
                    </>
                }
            </div>
            <OptionsBtn options={optionsContext}/>
        </div>
    )
        ;
};

export default ToDoItem;