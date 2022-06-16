import './App.scss';
import Nav from './Components/Navbar/Nav';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
        <div className="">
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
