//Add import statements
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//import { logout } from "../features/auth/authApi";
import "./NavBar.scss";

//Add Navbar function
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const token = useSelector((state) => state.auth.token);

  const attemptLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  //Navbar links to Home, Departments Page, Professors Page, and Form to add or Delete a Department
  return (
    <nav>
      <menu>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/departments">Departments</NavLink>
        </li>
        <li>
          <NavLink to="/professors">Bio</NavLink>
        </li>
        <li>
          <NavLink to="/departments/new">Department Form</NavLink>
        </li>
        <li>
          <NavLink to="/users/login">Log In</NavLink>
        </li>
        {/*token ? (
          <>
            <li>
              <a href="#" onClick={attemptLogout}>
                Log Out
              </a>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
        ) */}
      </menu>
    </nav>
  );
}

export default Navbar;
