import { useState } from "react"

function InputBox(){
    const[value,setValue]=useState("");

    const handleChange=(event)=>{
        setValue(event.target.value)
    }
    const buttonClick=()=>{
        alert("content is on")
        setValue(" ")
    }
    return <div>
        <input type="text" value={value} onChange={handleChange} />
        <button onClick={buttonClick}>Alert</button>
    </div>
}

export default InputBox