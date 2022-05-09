import { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([])
  const add = (e) => {
    e.preventDefault();
    // console.log(typeof todos)
    // console.log(todos)
    setTodos([...todos, e.target[0].value])
    console.log(todos)
    e.target[0].value = ''
  }
  return (
    <div className="App">
      <form onSubmit={add}>
        <input type='text' />
        <input type='submit' value='Add' />
      </form>
      <div style={{marginTop:10}}>
      {(todos.length > 0)?(
          todos.map((todo) => (
            <TodoItem titl={todo} />
          ))):(<div>No todos</div>)}
      </div>
    </div>
  );
}

export default App;
