import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  
  let isLogged = !!localStorage.getItem("token")
  const history = useHistory()

  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/login")
 }

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#1">
        Movies
      </a>
      { isLogged && <button className="btn btn-primary" type="button" onClick={logOut}>LOGOUT</button> }
    </nav>
  );
};

export default Navbar;
