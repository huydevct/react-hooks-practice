import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { TodoContext } from "../contexts/TodoContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todos = () => {
  //load todos context
  const { todos } = useContext(TodoContext);

  //load auth context
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="todo-list">
      <TodoForm />
      {isAuthenticated ? (
        <ul>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: 'center' }}>Not Authorised</p>
      )}
    </div>
  );
};

export default Todos;
