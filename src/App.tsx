import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/">
              <TodoList />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
