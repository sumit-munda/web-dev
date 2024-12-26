const todosKey = "Tasks";

const getLocalStorageTodoData = () => {
  const rawTodos = localStorage.getItem(todosKey);
  if (!rawTodos) {
    return [];
  } else {
    try {
      return JSON.parse(rawTodos);
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
      return [];
    }
  }
};

const setLocalStorageTodoData = (task) => {
  localStorage.setItem(todosKey, JSON.stringify(task));
};

export { getLocalStorageTodoData, setLocalStorageTodoData };
