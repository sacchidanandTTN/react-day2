import React, { useState } from "react";

export default function ControlCounter(){
    const [count,setCount] = useState(0);

    return (
        <div className="main-container">
        < br/>
        <button className="min-button" onClick={()=>{setCount(count-1)}}>-</button>

        <h1>Current counter is : {count}</h1>
        <button className="min-button" onClick={()=>{setCount(count+1)}}>+</button>
        </div>
    )
}