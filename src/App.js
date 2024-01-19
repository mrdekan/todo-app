import React, {useEffect, useState} from "react";
import './App.css';
import ToDoList from "./Components/ToDoList/ToDoList.jsx";
import ListOfToDoLists from "./Components/ListOfToDoLists/ListOfToDoLists.jsx";
import Storage from "./Utils/Storage.js";
import Modal from "./Components/UI/Modal/Modal.jsx";
import Settings from "./Components/Settings/Settings.jsx";

function App() {
    const [lists, setLists] = useState(Storage.getListsNames());
    const [selectedList, setSelectedList] = useState(lists && lists.length > 0 ? lists[0] : {});
    const [list, setList] = useState(Storage.getToDoList(selectedList.id));
    useEffect(() => {
        setList(Storage.getToDoList(selectedList.id));
    }, [selectedList]);
    const [settingsIsOpen, setSettingsIsOpen] = useState(false);
    const openSettings = () =>{
        setSettingsIsOpen(true);
    }
    const updateLists = (lists) => {
        setLists(lists);
        Storage.setListsNames(lists);
    }
    return (
        <div className="App">
            <ListOfToDoLists selectedList={selectedList} setSelectedList={setSelectedList} lists={lists}
                             setLists={updateLists} openSettings={openSettings}/>
            <ToDoList list={list} setList={setList}/>
            {settingsIsOpen && <Modal visible={settingsIsOpen} setVisible={setSettingsIsOpen}><Settings/></Modal>}
        </div>
    );
}

export default App;
