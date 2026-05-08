import { useState } from "react";

export default function List(){
    const [input, setInput] =useState("");
    const [events, setEvents] =useState([]);
    function addEvent(){
        if (input.trim()==="")return;

    setEvents([...events, input]);

    setInput("");

    }

    return(
        <div className="list-container">
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
        <button onClick={addEvent}></button>
        </div>
    )
}