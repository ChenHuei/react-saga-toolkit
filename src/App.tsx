import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import { increase, decrease, increaseAsync } from "./store/slices/counter";

function App() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter);

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/counter">
              <Counter
                value={counter}
                onIncrement={() => dispatch(increase())}
                onDecrement={() => dispatch(decrease())}
                onIncrementAsync={() => dispatch(increaseAsync())}
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
