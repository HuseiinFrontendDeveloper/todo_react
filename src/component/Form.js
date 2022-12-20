import React from 'react';

function Form({setInputText,todos,setTodos,inputText,setStatus}) {
const inputTextHandler = (e) => {
  setInputText(e.target.value);
}
const submitTodoHandler = (e) => {
  e.preventDefault();
  if(inputText !== '')
 setTodos([
  ...todos, {text: inputText,complate:false,id:Math.random() *1000}
])
else {
  alert('Biror nima kiriting')
}
setInputText("");
}

const statusHandler = (e) => {
 setStatus(e.target.value)
}
 return(
  <form>
     <input 
      onChange={inputTextHandler} 
      type="text"
      value={inputText}
      className='todo-input' />
     <button onClick={submitTodoHandler} className='todo-button' type='submit'>
       <i className='fas fa-plus-square'></i>
     </button>
    <div className='select'>
     <select onChange={statusHandler} name='todos' className='filter-todo'>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
     </select>
    </div>

  </form>
 )
}
export default Form