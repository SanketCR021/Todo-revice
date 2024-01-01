import React from "react";
import ReactDOM from "react-dom/client";

const AddTodo = ({ addingTodo }) => {
  return (
    <>
      <div className="container text-center">
        <div className="row custom-row">
          <div className="col-6">
            <input type="text" id='task' placeholder="Enter task here..." />
          </div>
          <div className="col-4">
            <input type="date" id="taskDate" />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                addingTodo(task.value, taskDate.value);
                task.value = '';
                taskDate.valueAsDate = new Date('mm-dd-yyyy');
              }}>
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
