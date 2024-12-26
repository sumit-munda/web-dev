import { FiCheckSquare, FiDelete } from "react-icons/fi";

const TodoList = ({
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
        <FiCheckSquare />
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        <FiDelete />
      </button>
    </li>
  );
};

export default TodoList;
