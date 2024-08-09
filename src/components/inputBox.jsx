import React from "react";

function InputBox(props) {

    const val=props.val
    const handleContent=props.handleContent
    const handleAddItem=props.handleAddItem
    return( <div className='input-box'>
                <input type='text' value={val} onChange={handleContent}/>
                <button onClick={handleAddItem}>Add Item</button>
            </div>);
}

export default InputBox;