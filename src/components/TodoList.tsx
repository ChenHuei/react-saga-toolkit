import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getTodo } from "../store/slices/todo";

const TodoList = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.todo.list);

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return (
    <div>
      <p>todo list</p>
      {list.map((item) => (
        <div key={item.title}>{item.title}</div>
      ))}
    </div>
  );
};

export default TodoList;
