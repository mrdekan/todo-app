import React, {useState} from "react";
import './App.css';
import ToDoList from "./Components/ToDoList/ToDoList.jsx";
import ListOfToDoLists from "./Components/ListOfToDoLists/ListOfToDoLists.jsx";
import Storage from "./Utils/Storage.js";

function App() {
  const [lists,setLists] = useState(Storage.getListsNames());
  const [selectedList, setSelectedList] = useState(lists&&lists.length>0 ? lists[0] : {});

  const updateLists = (lists) =>{
      setLists(lists);
      Storage.setListsNames(lists);
  }
  return (
    <div className="App">
        <ListOfToDoLists selectedList={selectedList} setSelectedList={setSelectedList} lists={lists} setLists={updateLists}/>
        <ToDoList model={Storage.getToDoList(selectedList.id)}/>
    </div>
  );
}

export default App;
