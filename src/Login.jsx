import {React, useState} from 'react';
import {useLogin} from './Session.js'

export default function Login() {
    const [data, setData] = useState({email:"",  password:""})
    const { login } = useLogin()
    
    const handleChange = name => event => {
        setData(prevState => ({ ...prevState, [name]: event.target.value }));
      }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        login(data).catch(err => console.log(">>>>>>>>>>>>>>"));
    }

    return (
    <div>
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
