import React from 'react';
import cl from './ListName.module.css';
import OptionsBtn from "../UI/OptionsBtn/OptionsBtn";
import Storage from "../../Utils/Storage";
const ListName = ({selectedList, setSelectedList, el, setLists, lists}) => {

    function edit(){
        alert('editing');
    }
    function remove(){
        const newLists = lists.filter(list => list !== el);
        Storage.setListsNames(newLists);
        Storage.deleteToDoList(el.id);
        setLists(newLists);
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
            <input type="radio" id={el.id} name="Lists" checked={selectedList === el}
                   onChange={() => setSelectedList(el)}/>
            <label htmlFor={el.id}>{el.name}</label>
            <OptionsBtn options={options}/>
        </div>
    );
};

export default ListName;