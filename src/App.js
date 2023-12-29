import './App.css';
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {
  const todo = {
      name: 'Some test name of list',
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
  return (
    <div className="App">
        <ToDoList model={todo}/>
    </div>
  );
}

export default App;
