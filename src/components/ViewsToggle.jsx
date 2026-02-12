import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";

export default function ViewsToggle(){
 const [flag,setFlag] = useState(false);

    return (
        <>
        <button onClick={()=>{setFlag(!flag)}}>Button to Toggle Views</button>
        {flag?<Login/>:<Logout/>}
        </>
    )
}