import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  //State
  const [todos, setTodos] = useState([
    { id: 1, title: "Viec 1" },
    { id: 2, title: "Viec 2" },
    { id: 3, title: "Viec 3" },
    { id: 4, title: "Viec 4" },
    { id: 5, title: "Viec 5" },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const TodoContextData = {
    todos,
    addTodo,
    deleteTodo,
  };

  return (
    <TodoContext.Provider value={TodoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
