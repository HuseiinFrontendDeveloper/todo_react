import React,{useEffect, useState} from 'react';
import './App.css';
import Form from './component/Form'
import TodoList from './component/TodoList';

function App() {
  const [inputText,setInputText] = useState('');
  const [todos,setTodos] = useState([]);
  const [status,setStatus] =useState('all');
  const [filteredTodos,setFilteredTodos] = useState([]);

  const filterHander = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.complate === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.complate === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  useEffect(() => {
    filterHander();
  },[status,todos])
   return (
    <div className="App">
     <header>
      <h1>React Todo List {inputText}</h1>
     </header>
    <Form 
      setTodos={setTodos} 
      inputText={inputText}
      todos={todos}
      setInputText={setInputText}
      setStatus={setStatus} />
    <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
