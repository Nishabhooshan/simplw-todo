import "./styles.css";
import { useState } from "react";

let todos = [];
const ToDoElement = ({ value, idx, onCompleteTodo }) => {
  console.log("value:", value);
  return (
    <li>
      {value.todo}
      <button onClick={() => onCompleteTodo(idx)}>
        {value.isCompleted ? "complete task" : "task completed"}
      </button>
      <button onClick={() => removeToDoItem(idx)}>remove todo item</button>
    </li>
  );
};

export default function App() {
  //for input
  const [inputValue, setToDo] = useState({
    todo: "",
    isCompleted: false
  });
  // for managing todo list
  const [todos, updateToDoList] = useState([]);
  //3 task
  //add todo
  addTodo = () => {
    if (inputValue.todo) {
      updateToDoList([...todos, inputValue]);
      setToDo({
        todo: "",
        isCompleted: false
      });
    }
    // console.log("our todo:", todos);
  };

  //complete todo
  onCompleteTodo = (idx) => {
    const ourItem = todos[idx];
    const mTodos = [...todos];

    //change object property isCompleted
    const updateItem = {
      ...ourItem,
      isCompleted: !ourItem.isCompleted
    };
    //put updated item into todo list
    mTodos[idx] = updateItem;
    updateToDoList(mTodos);
  };

  //remove todo
  removeToDoItem = (idx) => {
    const mTodos = [...todos];
    mTodos.splice(idx, 1);
    //update todos
    updateToDoList(mTodos);
  };

  return (
    <div className="App">
      <h1 style={{ textDecoration: "Underline" }}>Simple To do List</h1>
      <input
        type="text"
        value={inputValue.todo}
        placeholder="add to do item"
        onChange={(e) =>
          setToDo({
            todo: e.target.value,
            isCompleted: false
          })
        }
      />
      <button onClick={addTodo}>add to do</button>
      <ul>
        {todos.length > 0 &&
          todos.map((value, idx) => {
            return (
              <ToDoElement
                key={value.todo + idx}
                value={value}
                idx={idx}
                onCompleteTodo={onCompleteTodo}
                removeToDoItem={removeToDoItem}
              />
            );
          })}
      </ul>
    </div>
  );
}
