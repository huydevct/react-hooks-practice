import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  //load context theme
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  //load context todos
  const {addTodo} = useContext(TodoContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({
      id: uuidv4(),
      title,
    });
    setTitle("");
  };

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter new todo..."
        onChange={onTitleChange}
        value={title}
        required
      />
      <input type="submit" value="Add" style={style} />
    </form>
  );
};

export default TodoForm;
