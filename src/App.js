import React, {useEffect, useState} from "react";
import './App.css';
import ToDoList from "./Components/ToDoList/ToDoList.jsx";
import ListOfToDoLists from "./Components/ListOfToDoLists/ListOfToDoLists.jsx";
import Storage from "./Utils/Storage.js";

function App() {
  const [lists,setLists] = useState(Storage.getListsNames());
  const [selectedList, setSelectedList] = useState(lists&&lists.length>0 ? lists[0] : {});
  const [list,setList] = useState(Storage.getToDoList(selectedList.id));
    useEffect(() => {
        setList(Storage.getToDoList(selectedList.id));
    }, [selectedList]);

  const updateLists = (lists) =>{
      setLists(lists);
      Storage.setListsNames(lists);
  }
  /*const updateToDo = ()=>{
      setList(Storage.getToDoList(selectedList.id));
  }*/
  return (
    <div className="App">
        <ListOfToDoLists selectedList={selectedList} setSelectedList={setSelectedList} lists={lists} setLists={updateLists}/>
        <ToDoList list={list} setList={setList}/>
    </div>
  );
}

export default App;
