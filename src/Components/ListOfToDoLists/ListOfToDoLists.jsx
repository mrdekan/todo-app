import React from 'react';
import cl from  './ListOfToDoLists.module.css';
import ListName from "../ListName/ListName";
const ListOfToDoLists = ({lists, selectedList, setSelectedList}) => {
    return (
            <div className={cl.sideBar}>
                {lists.map((el, index) => (
                    <ListName key={el} setSelectedList={setSelectedList} selectedList={selectedList} el={el}/>
                ))}
            </div>
    );
};

export default ListOfToDoLists;