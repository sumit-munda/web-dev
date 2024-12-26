import { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import Tooltip from "./Tooltip";
import {getLocalStorageTodoData, setLocalStorageTodoData} from "./TodoLS";


const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());
  const [tooltipMessage, setTooltipMessage] = useState("");

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    console.log(inputValue);

    if (!content) {
      setTooltipMessage("");
      return;
    }

    const ifTodoContentMatched = !!task.find(
      (curTask) => curTask.content === content
    );
    console.log(ifTodoContentMatched);

    if (ifTodoContentMatched) {
      setTooltipMessage("Already Exists!");
      return;
    }

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
    setTooltipMessage("");
  };

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  setLocalStorageTodoData(task);

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  const handleDeleteAll = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <section style={{ position: "relative" }}>
        <TodoForm
          onAddTodo={handleFormSubmit}
          setTooltipMessage={setTooltipMessage}
        />
        {tooltipMessage && <Tooltip tooltipMessage={tooltipMessage} />}
      </section>
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleDeleteAll}>
          Clear All
        </button>
      </section>
    </section>
  );
};

export default Todo;
