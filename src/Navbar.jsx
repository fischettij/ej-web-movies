import React, {useContext} from "react";
import {useLogout} from "./Session"
import {SessionContext} from './Session'

const Navbar = () => {  
  const {state} = useContext(SessionContext) 
  const { logout } = useLogout()

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#1">
        Movies
      </a>
      { state.isAuthenticated && <button className="btn btn-primary" type="button" onClick={logout}>LOGOUT</button> }
    </nav>
  );
};

export default Navbar;
