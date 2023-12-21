import Item from "./components/Item";
import { useState } from "react";
import Button from "./components/Button";

export default function App() {

  const [ todos, setTodos ] = useState(["uno", "dos", "tres"])
  const [ text, setText ] = useState("");

  function onInputChange(event) {
    setText(event.target.value)
  }

  function onKeyUp(event){
    if(event.key === `Enter`){
      addToDo()
    }
  }

  function addToDo () {
    if(text.trim().length > 0){
    setTodos([
      text, ...todos
    ]);
    setText('')
  }
  }

  function onDelete(index) {
    todos.splice(index, 1)
    setTodos([... todos])
  }

  return (
  <main className="bg-black min-h-screen flex justify-center p-16 text-white">

  <div className="h-full flex flex-col w-full max-w-[500px] gap-5">
    <input type="text" className="bg-white/20 p-2 rounded text-white" value={text} onChange={onInputChange} onKeyUp={onKeyUp} />
    <Button className="bg-white rounded p-2 text-black" onClick={addToDo} >Agregar</Button>

    {
      todos.map((todo, index) => {
        return(
          <Item key={`item-${index}`} text={todo} onDelete={() => {onDelete(index)}}/>
        )})
    }
  </div>

  </main>
)}