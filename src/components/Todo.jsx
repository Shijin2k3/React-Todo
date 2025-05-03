import React from 'react'

export const Todo = ({task,deleteTodo}) => {
    
  return (
    <div className='Todo'>
        <p>{task.task}</p>
        <div className='Todo-action'>
            <p className='edit'>Edit</p>
            <p className='delete' onClick={()=>deleteTodo(task.id)} >X</p>
        </div>
    </div>
  )
}
