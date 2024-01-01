import React from "react";
import ReactDOM from "react-dom/client";

const TodoItem = ({ TodoItem, TodoDate, deleteTodo }) => {
  return (
    <>
      <div className="container">
        <div className="row custom-row">
          <div className="col-6">{TodoItem}</div>
          <div className="col-4">{TodoDate}</div>
          <div className="col-2 cstm-button">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                deleteTodo(TodoItem);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
