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

    if(!localStorage.getItem('lists')){
            localStorage.setItem('lists','[{"id":"e126ab75-0383-4c66-b3e3-bd93598fe91a","name":"checkboxNoDelete"},{"id":"b0a5a1a7-58bc-4d31-8d4c-288b8b29eaed","name":"checkboxDelete"},{"id":"6b717887-79a2-400a-970b-d45957ed1af7","name":"selectNoDelete"},{"id":"842e7ebf-c6cd-4d84-9a93-7faf352f8989","name":"selectDelete"}]');
            localStorage.setItem('e126ab75-0383-4c66-b3e3-bd93598fe91a','{"id":"e126ab75-0383-4c66-b3e3-bd93598fe91a","name":"checkboxNoDelete","deleteAfterMarking":false,"type":0,"options":[],"items":[{"value":"abc","state":0},{"value":"cad","state":1},{"value":"asd","state":1},{"value":"dsad sad","state":0},{"value":"asdasd","state":0},{"value":" sadsadasd","state":1}]}');
            localStorage.setItem('6b717887-79a2-400a-970b-d45957ed1af7','{"id":"6b717887-79a2-400a-970b-d45957ed1af7","name":"selectNoDelete","deleteAfterMarking":false,"type":1,"options":[{"name":"1 phase","value":0},{"name":"2 phase","value":1},{"name":"3 phase","value":2}],"items":[{"value":"abc","state":0},{"value":"asd","state":0},{"value":"asd","state":0},{"value":"asd","state":2},{"value":"asd","state":1},{"value":"asd","state":1}]}');
            localStorage.setItem('b0a5a1a7-58bc-4d31-8d4c-288b8b29eaed','{"id":"b0a5a1a7-58bc-4d31-8d4c-288b8b29eaed","name":"checkboxDelete","deleteAfterMarking":true,"type":0,"options":[],"items":[{"value":"asdsad","state":0},{"value":"asd","state":0},{"value":"asd","state":0},{"value":"das","state":0},{"value":"asd","state":0},{"value":"asd","state":0},{"value":"asd","state":0}]}');
            localStorage.setItem('842e7ebf-c6cd-4d84-9a93-7faf352f8989','{"id":"842e7ebf-c6cd-4d84-9a93-7faf352f8989","name":"selectDelete","deleteAfterMarking":true,"type":1,"options":[{"name":"Phase 1","value":0},{"name":"Phase 2","value":1},{"name":"Phase 3","value":2}],"items":[{"value":"asd","state":0},{"value":"asd","state":1},{"value":"asd","state":0},{"value":"asd","state":0}]}');
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
