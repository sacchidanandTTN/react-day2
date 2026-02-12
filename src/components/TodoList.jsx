import React, { useState } from "react";

export default function(){
    const [todo,setTodo] = useState([]);
    const [text,setText] = useState("");

    const handelSubmit = (e)=>{
        e.preventDefault();

        if(text.trim() === "") return;

        setTodo(prev=>[...prev,text]);
        setText("");
    }

    const deleteFirst = ()=>{
        setTodo(prev => prev.slice(1));
    }

  return (
      <>
      <form onSubmit={handelSubmit}>
        <input className="form-input" type="text" placeholder="Enter the todo" value={text} onChange={(e)=>setText(e.target.value)} />
        <button type="submit">Add the to do</button>
        <button className="delete-button" onClick={deleteFirst}>Delete First todo</button>
    </form>

    <ul>
        {todo.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
    </ul>
      </>
  )
}