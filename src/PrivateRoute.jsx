import React, {useContext}from 'react'
import {
    Route,
    Redirect
  } from "react-router-dom";
import {SessionContext} from './Session';

export default function PrivateRoute({path, component}) {
    const {state} = useContext(SessionContext)
    if (!state.isAuthenticated) return <Redirect to="/login" />;
    
    return (
        <Route path={path} component={component}/> 
    )
}
