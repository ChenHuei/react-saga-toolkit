import { Todo } from "../../store/slices/todo";
import { useAppDispatch } from "../../hooks";
import { putTodo } from "../../store/slices/todo";

const TodoItem = (props: Todo) => {
  const dispatch = useAppDispatch();
  const { title, done } = props;

  const onChange = () => {
    dispatch(putTodo({ ...props, done: !done }));
  };

  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        padding: "8px",
        marginBottom: "8px",
        border: "1px solid #eee",
        borderRadius: "4px",
      }}
    >
      <input
        type="checkbox"
        style={{ marginRight: "4px" }}
        checked={done}
        onChange={onChange}
      />
      <span>{title}</span>
    </label>
  );
};

export default TodoItem;
