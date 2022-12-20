import React from "react";

function Todo({text,todos,setTodos,todo}) {

const deleteHandler = () => {
 setTodos(todos.filter(el => el.id !== todo.id))
}

const complateHandler = () => {
 setTodos(
  todos.map(item => {
   if(item.id === todo.id) {
    return{
     ...item,
     complate: !item.complate,
    }
   }
   return item;
  })
 )
}

 return(
  <div className="todo">
   <li className={`todo-item ${todo.complate ? 'completed' : ''}`}>{text}</li>
   <button onClick={complateHandler} className="complete-btn">
    <i className="fas fa-check" />
   </button>
   <button onClick={deleteHandler} className="trash-btn">
    <i className="fas fa-trash" />
   </button>
  </div>
 )
}
export default Todo