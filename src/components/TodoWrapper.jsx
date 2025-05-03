import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './Todo';
import { EditTodo } from './EditTodo';

export const TodoWrapper = () => {
    const [todos,setTodos]=useState([]);

    const addTodo=(todo)=>{
        setTodos([...todos,{id:uuidv4(),task:todo,
            completed:false,isEditing:false
        }])
        
    }
    const deleteTodo =(id)=>{
        setTodos(todos.filter(todo => todo.id !== id))
    } 
    const editTodo=(id)=>{
        setTodos(todos.map(todo => todo.id === id ?{...todo,isEditing:!todo.isEditing}:todo))
    }
    const editTask=(task,id)=>{
         setTodos(todos.map(todo => todo.id === id? {...todo,task,isEditing:!todo.isEditing}:todo))
    }
  return (
    <div className='TodoWrapper'>
        <h1>My Todo List !</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo)=>(
            todo.isEditing?(
                <EditTodo  key={todo.id} editTodo={editTask} task={todo}/>
            ):(
           <Todo  task={todo} key={todo.id} deleteTodo={deleteTodo} editTodo={editTodo}/>
        
            )
        )) }
          
    </div>
  )
}   
