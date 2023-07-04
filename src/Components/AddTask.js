import React, { useState } from 'react'

const AddTask = ({addedtask}) => {
  const [text,setText] = useState("");
  
  const addItem = () => {
    addedtask(text);
    setText("");
  }
  return (
    <div>
      <div className='input-container'>
        <input 
        type='text' 
        value={text}
        className='input' 
        placeholder='Add a new task'
        onChange={(e) => {
          setText(e.target.value);
        }}/>
        <button className='add-btn' onClick={addItem}>ADD</button>
      </div>
    </div>
  )
}

export default AddTask
