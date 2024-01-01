import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItemss from "./components/TodoItemss";
import "./App.css";

const App = () => {

 
  const [todoList, setTodoList] = useState([]);  /// This is the array of objects

   const addingTodo = (todoTask, todoDate) => {
      if (todoTask === '' && todoDate === '')
      {
          alert('Masti mat kar bhai, sai se likh phele');
          return;
      } 
      else if (todoTask === '')
      {
          alert('Phele task to likh le bhai');
          return;
      } 
      else if (todoDate === '')
      {
          alert('Phele Date to daal de bhai');
          return;
      } 
      
      const newItem =  {'name':todoTask, 'date':todoDate};
      setTodoList([...todoList, newItem]); // This is the spread operator
   }

   const deleteTodo = (todoTask) => { 
      setTodoList(todoList.filter((item) => item.name !== todoTask));
   }

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo addingTodo={addingTodo} />

        <div className="items-container">
        <TodoItemss TodoList={todoList} deleteTodo={deleteTodo} /> 
        </div>

      </center>
    </>
  );
};

export default App;
