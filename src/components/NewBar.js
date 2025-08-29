import { NavLink } from "react-router-dom";
import "./NewBar.css";  // Make sure this line exists

function NewBar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/login" className="nav-link">
        Login
      </NavLink>
    </nav>
  );
}

export default NewBar;