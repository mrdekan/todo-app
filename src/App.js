import './App.css';
import ToDoList from "./Components/ToDoList/ToDoList";
import ListOfToDoLists from "./Components/ListOfToDoLists/ListOfToDoLists";
import {useState} from "react";
import toDoList from "./Components/ToDoList/ToDoList";
import Storage from "./Utils/Storage";

function App() {
  const todo1 = {
      name: 'Some test name of list',
      deleteAfterMarking: true,
      items: [
            {
              text: 'Lorem ipsum',
              checked: true,
            },
            {
                text: 'Lorem ipsum',
                checked: false,
            },
            {
                text: 'Lorem ipsum',
                checked: false,
            },
            {
                text: 'Lorem ipsum',
                checked: true,
            },
            {
                text: 'Lorem ipsum',
                checked: false,
            },
      ],
  }
  const todo2 = {
        name: 'Some other test name of list',
        deleteAfterMarking: true,
        items: [
            {
                text: 'Lorem ipsum',
                checked: true,
            },
            {
                text: 'Lorem ipsum',
                checked: false,
            },
            {
                text: 'Lorem ipsum',
                checked: false,
            },
            {
                text: 'Lorem ipsum',
                checked: false,
            }
        ],
    }
  const todo3 = {
        name: 'Some other test name of list again',
        deleteAfterMarking: false,
        items: [
            {
                text: 'Lorem ipsum',
                checked: false,
            },
            {
                text: 'Lorem ipsum',
                checked: false,
            },
            {
                text: 'Lorem ipsum',
                checked: false,
            }
        ],
    }
  const todoLists = [
      {
          name: "test1",
          value: todo1
      },
      {
          name: "test2",
          value: todo2
      },
      {
          name: "test3",
          value: todo3
      },
  ]
  const lists = Storage.getListsNames();
  //localStorage.setItem('lists',JSON.stringify(lists))
  const [selectedList, setSelectedList] = useState(lists[0]);
  return (
    <div className="App">
        <ListOfToDoLists selectedList={selectedList} setSelectedList={setSelectedList} lists={lists}/>
        <ToDoList model={todoLists.find(el => el.name === selectedList).value}/>
    </div>
  );
}

export default App;
