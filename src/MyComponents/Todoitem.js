import React from 'react'


export const Todoitem = ({todo , onDelete}) => {
  return (
    <div className="todo-item">
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger my-3" onClick= { ()=>{onDelete(todo)}}
        >Delete</button>
    </div> 
  )
}
