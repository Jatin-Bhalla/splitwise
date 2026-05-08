import { useState } from "react"


export default function DropBox({label}){
    // opened, setAsOpened = 
    const [isOpen, setAsOpened]= useState(false);
    function toggleDropdown (){
        setAsOpened(!isOpen);
        //the state is not opened
        //the function does the opposite of the state
    }

    return(
        <div>
            <button onClick={toggleDropdown}>{label}</button>
            {isOpen && <List/>
            }

        </div>
    )
}