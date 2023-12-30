import React from 'react';
import cl from './ListName.module.css';
import OptionsBtn from "../UI/OptionsBtn/OptionsBtn";
const ListName = ({selectedList, setSelectedList, el}) => {

    function edit(){
        alert('editing');
    }
    function remove(){
        alert('deleting');
    }
    const options = [
        {
            name: 'Edit',
            func: edit
        },
        {
            name: 'Delete',
            func: remove
        }
    ];
    const titleClasses = [cl.title];

    if (selectedList === el)
        titleClasses.push(cl.selectedTitle);
    return (
        <div className={titleClasses.join(' ')}>
            <input type="radio" id={el} name="Lists" checked={selectedList === el}
                   onChange={() => setSelectedList(el)}/>
            <label htmlFor={el}>{el}</label>
            <OptionsBtn options={options}/>
        </div>
    );
};

export default ListName;