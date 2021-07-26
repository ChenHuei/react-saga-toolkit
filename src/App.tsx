import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks";
import Counter from "./components/Counter";
import { increase, decrease, increaseAsync } from "./store/slices/counter";

function App() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.counter);

  const onIncrement = (): void => {
    dispatch(increase());
  };

  const onDecrement = (): void => {
    dispatch(decrease());
  };

  const onIncrementAsync = (): void => {
    dispatch(increaseAsync());
  };

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">TodoList</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/counter">
              <Counter
                value={value}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onIncrementAsync={onIncrementAsync}
              />
            </Route>
            <Route path="/">
              <p>todoList</p>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
