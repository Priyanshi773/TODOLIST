import React from 'react';
import { Todoitem } from '../MyComponents/Todoitem';

export default function Todos(props) {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };

  return (
    <div className="container todo-container" style={myStyle}>
      <h3 className="todo-heading">Todos List</h3>
      {props.todos.length === 0 ? (
        <p className="text-center">No todos to display</p>
      ) : (
        props.todos.map((todo) => {
          return (
            <div key={todo.sno}>
              <Todoitem todo={todo} onDelete={props.onDelete} />
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
}


