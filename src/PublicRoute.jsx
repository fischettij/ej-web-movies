import React from 'react'
import {
    Route,
    Redirect
  } from "react-router-dom";

export default function PublicRoute({path, component}) {
    const isLogged = !!localStorage.getItem("token");
    if (isLogged) return <Redirect to="/home" />;
    
    return (
        <Route path={path} component={component}/> 
    )
}
