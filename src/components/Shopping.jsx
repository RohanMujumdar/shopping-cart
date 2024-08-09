//rfce
import React, { useState } from 'react'
import InputBox from './inputBox'
import ListItem from './listItem'
function Shopping() {

    const [val,setVal]=useState("")
    const [task,setTask]=useState([])

    const handleAddItem=()=>{
        const newItem=val;
        // const newArray=[]
        // for(let i=0;i<task.length;i++)
        // {
        //     newArray.push(task[i])
        // }
        // newArray.push(newItem)
        // setTask(newArray)
        // setVal("")


        //used to copy task array in newArray
        const newArray=[...task]
        newArray.push(newItem)

        setTask(newArray)
        setVal("")
    }

   
    const handleContent=(e)=>{
        setVal(e.target.value)
    }

    const handleDelete=(index)=>{
        const newArray=[...task]
        newArray.splice(index,1)
        setTask(newArray)
    }

  return (
    <div className='Shopping-List'>
        <InputBox handleContent={handleContent} val={val} handleAddItem={handleAddItem}></InputBox>
        <h2>Shopping Cart</h2>
        <ListItem task={task} handleDelete={handleDelete}></ListItem>
    </div>
  );
}

export default Shopping;




