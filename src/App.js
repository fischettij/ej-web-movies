import { React } from 'react';
import Login from './Login.jsx'
import './App.css';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx'
import PublicRoute from './PublicRoute.jsx'
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import PrivateRoute from './PrivateRoute.jsx';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <PublicRoute path="/login" component={Login}/>
          <PrivateRoute path="/home" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
