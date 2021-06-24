import React, { createContext, useState, useContext, useMemo } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

// Constants

const EMPTY_USER = { email:"", token:"" }; 

const SessionContext = createContext({
    state: {
        user: EMPTY_USER, 
        isAuthenticated: false
    },
    actions: {
        setUser: (user) => {}
    }
})

const SessionProvider = ({children}) => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    const [user, setUser] = useState(storedUser);
    const isAuthenticated = useMemo(() => !!user?.token, [user]);
      
    const state = {
        user,
        isAuthenticated,
    }
    const actions = {
        setUser,
    }

    return (
        <SessionContext.Provider value={{state, actions}}>
                {children}
        </SessionContext.Provider>
    )
}


const useLogin = () => {
    const { actions } = useContext(SessionContext)
    const { setUser } = actions 
    const history = useHistory()

    const login = (data) => {
        return axios.post('http://localhost:7000/login', data)
        .then(response => {
            let user = {
                email: response.data.email,
                token: response.headers.authorization
            }
            setUser(user)
            localStorage.setItem("user", JSON.stringify(user))
            history.push("/home");
        });
    }

    return { login }
}

const useLogout = () => {
    const { actions } = useContext(SessionContext)
    const { setUser } = actions
    const history = useHistory()

    const logout = () => {
        setUser(EMPTY_USER);
        localStorage.removeItem("user");
        history.push("/login")
    }

    return { logout } 
}

export {SessionContext, SessionProvider, useLogin, useLogout}