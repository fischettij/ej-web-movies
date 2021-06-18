import {React, useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


export default function Login() {
    const [data, setData] = useState({email:"",  password:""})
    const history = useHistory();
    const [loginError, setLoginError] = useState(false)

    const handleChange = name => event => {
        setData(prevState => ({ ...prevState, [name]: event.target.value }));
      }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:7000/login', data)
        .then(response => {
            localStorage.setItem("token",response.headers.authorization)
            history.push("/home");
          })
          .catch(_ => setLoginError(true));
    }

    return (
    <div>
        {loginError && (<div className="alert alert-danger" role="alert">
            Bad email or password
        </div>) }
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">
            Email
            <input
            required
            type="email"
            
            name="email"
            value={data.email}
            onChange={handleChange("email")}
            className="form-control"
            ></input>
        </label>
        <label htmlFor="password">
            Password
            <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange("password")}
            className="form-control"
            ></input>
        </label>
        <button type="submit" className="btn btn-primary">
            Login
        </button>
        </form>
  </div>
)
}
