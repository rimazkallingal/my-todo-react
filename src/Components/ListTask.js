import React from 'react'

const ListTask = ({passedtask,passedindex,removedtask}) => {
  return (
    <div>
      <div className='list-task'>
        {passedtask.title}
        <button className='delete-btn' onClick={() => {removedtask(passedindex)}}>Delete</button>
      </div>
    </div>
  )
}

export default ListTask
