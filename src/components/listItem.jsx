import React from "react";

function ListItem(props){

    const task=props.task
    const handleDelete=props.handleDelete
    return (<ul className='list'>
            {task.map((item,index)=>{
                return<li key={index}>
                        <span>{item}</span>
                        <button onClick={()=>{
                            handleDelete(index)
                        }}>Delete</button>
                    </li>
            })}
        </ul>);
}

export default ListItem