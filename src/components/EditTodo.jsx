import React, { useState } from 'react'

export const EditTodo = ({editTodo,task}) => {
    const [value,setValue]=useState(task.task);

      const handleChange=(e)=>{
          setValue(e.target.value)
      }
      const handleSubmit=(e)=>{
          e.preventDefault()
          editTodo(value,task.id)
          setValue("")
      }
    return (
      <form className='TodoForm' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={value}
           type="text" className='todo-input' placeholder='Update Task' />
           <button type='submit' className='todo-btn'>Update</button>
      </form>
    )
}
