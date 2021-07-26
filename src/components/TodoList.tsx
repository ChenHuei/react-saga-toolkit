import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getTodo, addTodo } from "../store/slices/todo";

// components
import TodoItem from "./todolist/TodoItem";

const TodoList = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.todo.list);
  const [title, setTitle] = useState("");

  const onSubmit = () => {
    if (title.trim().length < 1) return;

    dispatch(
      addTodo({
        id: list.length + 1,
        title: title,
        done: false,
      })
    );
    setTitle("");
  };

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return (
    <div>
      <p>todo list</p>
      <div style={{ marginBottom: "8px" }}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
      {list.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TodoList;
