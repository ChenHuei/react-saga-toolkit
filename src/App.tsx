import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main style={{ padding: "0 20px" }}>
          <Switch>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/">
              <TodoList />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
