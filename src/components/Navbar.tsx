import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ borderBottom: "1px solid #333", marginBottom: "8px" }}>
      <ul>
        <li>
          <Link to="/">Todo List</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
