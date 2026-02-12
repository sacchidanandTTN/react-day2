import React, { useState } from "react";

export default function Parent(){
    const [message,setMessage] = useState("Hello - initial message ")

    return(
        <>
        <h2>{message}</h2>
        <button onClick={()=>setMessage(prev => prev === "Hello - updated message" ? "Hello - initial message":"Hello - updated message")}>Tap to get updated Message</button>
        </>
    )
}