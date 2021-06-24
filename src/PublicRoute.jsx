import React, {useContext} from 'react'
import {
    Route,
    Redirect
  } from "react-router-dom";
import { SessionContext } from './Session';

export default function PublicRoute({path, component}) {
    const {state} = useContext(SessionContext)
    if (state.isAuthenticated) return <Redirect to="/home" />;
    
    return (
        <Route path={path} component={component}/> 
    )
}
