interface CounterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onIncrementAsync: () => void;
}

const Counter = (props: CounterProps) => {
  const { value, onIncrement, onDecrement, onIncrementAsync } = props;

  return (
    <div>
      <div style={{ marginBottom: "8px" }}>Clicked: {value} times</div>
      <button onClick={onIncrement}>Increment</button>{" "}
      <button onClick={onDecrement}>Decrement</button>{" "}
      <button onClick={onIncrementAsync}>Increment after 1 second</button>
    </div>
  );
};

export default Counter;
