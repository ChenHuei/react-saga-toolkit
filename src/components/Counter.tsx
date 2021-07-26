import { useAppDispatch, useAppSelector } from "../hooks";
import { increase, decrease, increaseAsync } from "../store/slices/counter";

const Counter = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.counter.count);

  return (
    <div>
      <div style={{ marginBottom: "8px" }}>Clicked: {value} times</div>
      <button onClick={() => dispatch(increase())}>Increment</button>{" "}
      <button onClick={() => dispatch(decrease())}>Decrement</button>{" "}
      <button onClick={() => dispatch(increaseAsync())}>
        Increment after 1 second
      </button>
    </div>
  );
};

export default Counter;
