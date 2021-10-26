import React from "react";

const TodoItem = ({ todo, deleteTodo }) => {
  const style = {
    background: "rgb(240,240,240)",
    color: "black",
  };

  return (
    <li
      onClick={() => {
        deleteTodo(todo.id);
      }}
      style={style}
    >
      {todo.title}
    </li>
  );
};

export default TodoItem;
