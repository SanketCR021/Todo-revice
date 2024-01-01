import React from "react";
import ReactDOM from "react-dom/client";
import TodoItem from "./TodoItem";


const TodoItemss = ({ TodoList, deleteTodo }) => {
  return (
    <>
      {TodoList.map((item) => (
         <TodoItem key={item.name}  TodoItem={item.name} TodoDate={item.date} deleteTodo={deleteTodo} />
      ))}
    </>
  );
};

/*
const TodoItemss = ({ TodoList }) => {
    return (
      <>
        {TodoList.map((item) => {
           return <TodoItem TodoItem={item.name} TodoDate={item.date} />
        })}
      </>
    );
  };
*/

export default TodoItemss;
