import React from 'react'

export const Todo = ({task,deleteTodo,editTodo}) => {
    
  return (
    <div className='Todo'>
        <p>{task.task}</p>
        <div className='Todo-action'>
            <p className='edit' onClick={()=>editTodo(task.id)}>Edit</p>
            <p className='delete' onClick={()=>deleteTodo(task.id)} >X</p>
        </div>
    </div>
  )
}
