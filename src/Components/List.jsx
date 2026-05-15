import { useState, useEffect } from "react";
import "./List.css";

export default function List( {events, setEvents}) {
    const [input, setInput] = useState("");
    //const [events, setEvents] = useState([]);

      // ADD useEffect HERE
    useEffect(() => {
        console.log("Updated Events Array:", events);
    }, [events]);


    function addEvent() {
        if (input.trim() === "") return;

        setEvents([...events, input]);

        setInput("");
    }

    return (
        <div className="app-container">
            <h1 className="title">Friend List</h1>

            <div className="list-container">
                <input
                    className="friend-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter friend name"
                />

                <div id="button-container">
                    <button onClick={addEvent}>
                        <span>👥</span>
                        ADD FRIEND
                    </button>
                </div>
            </div>

            {/* Display Friends */}
            <ul className="friends-list">
    {events.map((event, index) => (
        <li key={index} className="friend-item">
            <span className="icon">😊</span>
            <span>{event}</span>
        </li>
    ))}
</ul>
        </div>
    );
}