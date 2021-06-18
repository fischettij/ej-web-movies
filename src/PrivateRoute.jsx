import React from 'react'
import {
    Route,
    Redirect
  } from "react-router-dom";

export default function PrivateRoute({path, component}) {
    const isLogged = !!localStorage.getItem("token");
    if (!isLogged) return <Redirect to="/login" />;
    
    return (
        <Route path={path} component={component}/> 
    )
}
